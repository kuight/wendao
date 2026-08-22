#!/usr/bin/env node
/* cdp-probe.mjs — 用 CDP 驱动本机 headless Edge/Chrome，导航到 URL、执行 JS、抓 console 与异常。
 * 用法:
 *   node scripts/cdp-probe.mjs <url> [jsExpr] [--wait ms]
 * 例:
 *   node scripts/cdp-probe.mjs http://localhost:8091/v5/index.html "document.querySelectorAll('canvas').length"
 * 依赖: Node 22+ 原生 WebSocket（无需第三方包）。Edge 需以 --remote-debugging-port 启动。
 * 受沙箱限制时，请对该命令申请 danger-full-access 一次授权。
 */
const BASE = process.env.CDP_HTTP || 'http://127.0.0.1:9222';

const url = process.argv[2];
const jsExpr = process.argv[3] ?? 'document.title';
let waitMs = 0;
const waitIdx = process.argv.indexOf('--wait');
if (waitIdx > 0) waitMs = parseInt(process.argv[waitIdx + 1], 10) || 0;

// --shot <path.png> : 截图保存到文件（CDP Page.captureScreenshot）
let shotPath = null;
const shotIdx = process.argv.indexOf('--shot');
if (shotIdx > 0) shotPath = process.argv[shotIdx + 1] || null;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getPageWs() {
  for (let i = 0; i < 10; i++) {
    try {
      const res = await fetch(`${BASE}/json/list`);
      const tabs = await res.json();
      const page = tabs.find((t) => t.type === 'page');
      if (page) return page.webSocketDebuggerUrl;
    } catch { /* retry */ }
    await sleep(500);
  }
  throw new Error('无法连接 CDP（检查 Edge 是否以 --remote-debugging-port 启动）');
}

async function main() {
  const wsUrl = await getPageWs();
  const ws = new WebSocket(wsUrl);
  let msgId = 0;
  const pending = new Map();
  const consoleMsgs = [];
  const exceptions = [];

  await new Promise((res, rej) => {
    ws.addEventListener('open', res);
    ws.addEventListener('error', rej);
  });

  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
    } else if (msg.method === 'Runtime.consoleAPICalled') {
      const args = (msg.params.args || []).map((a) => a.value ?? a.description ?? a.type).join(' ');
      consoleMsgs.push(`[console.${msg.params.type}] ${args}`);
    } else if (msg.method === 'Runtime.exceptionThrown') {
      const d = msg.params.exceptionDetails || {};
      exceptions.push(`[exception] ${d.text} ${(d.exception && d.exception.description) || ''}`.trim());
    }
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const id = ++msgId;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Page.navigate', { url });
  await sleep(waitMs || 3000); // 等页面加载/JS 执行

  const evalRes = await send('Runtime.evaluate', {
    expression: `(async()=>{ try { const v = await (${jsExpr}); return typeof v === 'string' ? v : JSON.stringify(v); } catch(e){ return 'JS_ERROR: ' + e.message; } })()`,
    awaitPromise: true,
    returnByValue: true,
  });

  console.log('=== 页面结果 ===');
  console.log(evalRes && evalRes.result ? evalRes.result.value : evalRes);
  if (consoleMsgs.length) {
    console.log('=== console 消息 ===');
    consoleMsgs.forEach((m) => console.log(m));
  } else {
    console.log('(无 console 消息)');
  }
  if (exceptions.length) {
    console.log('=== 页面异常 ===');
    exceptions.forEach((e) => console.log(e));
  } else {
    console.log('(无页面异常)');
  }
  if (shotPath) {
    try {
      const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
      const { writeFile } = await import('node:fs/promises');
      await writeFile(shotPath, Buffer.from(shot.data, 'base64'));
      console.log(`截图已保存: ${shotPath}`);
    } catch (e) {
      console.error('截图失败: ' + e.message);
    }
  }
  ws.close();
}

main().catch((e) => { console.error('FAIL: ' + e.message); process.exit(1); });