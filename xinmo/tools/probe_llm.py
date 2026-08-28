# -*- coding: utf-8 -*-
"""Probe LLM config channel by channel with minimal requests; print results.

Reads config.local.json (falls back to config.example.json). For each channel
(text, vision) sends the smallest possible chat completion and prints outcome.
Used to verify LLM config is usable (D2 tool; reused in D3 expression judging and D6).

Run:  python tools/probe_llm.py
Exit 0 always (this is a diagnostic, not a gate).
"""
import json
import os
import sys
import urllib.request
import urllib.error

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load_config():
    for name in ('config.local.json', 'config.example.json'):
        p = os.path.join(BASE, name)
        if os.path.exists(p):
            with open(p, encoding='utf-8') as f:
                return name, json.load(f)
    return None, {}


def probe_channel(name, cfg):
    print('=== channel: %s ===' % name)
    base_url = (cfg.get('base_url') or '').rstrip('/')
    api_key = cfg.get('api_key') or ''
    model = cfg.get('model') or ''
    if not base_url or not api_key or not model:
        missing = [k for k in ('base_url', 'api_key', 'model') if not (cfg.get(k) or '')]
        print('  SKIP: not configured (missing: %s)' % ', '.join(missing))
        return
    url = base_url + '/chat/completions'
    body = {
        'model': model,
        'messages': [{'role': 'user', 'content': 'ping'}],
        'max_tokens': 5,
    }
    data = json.dumps(body).encode('utf-8')
    req = urllib.request.Request(url, data=data, method='POST')
    req.add_header('Content-Type', 'application/json')
    req.add_header('Authorization', 'Bearer ' + api_key)
    print('  POST %s  model=%s' % (url, model))
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            raw = resp.read().decode('utf-8', 'replace')
            try:
                j = json.loads(raw)
                ch = j.get('choices', [{}])
                txt = ch[0].get('message', {}).get('content', '') if ch else ''
                print('  OK: status=%d reply=%r' % (resp.status, (txt or '')[:80]))
            except Exception:
                print('  OK: status=%d (non-JSON body) %r' % (resp.status, raw[:120]))
    except urllib.error.HTTPError as e:
        print('  HTTP ERROR %d: %s' % (e.code, e.read().decode('utf-8', 'replace')[:200]))
    except Exception as e:
        print('  ERROR: %s' % e)


def main():
    src, conf = load_config()
    if src is None:
        print('No config file found (config.local.json / config.example.json).')
        return 0
    print('Loaded config from %s' % src)
    for name in ('text', 'vision'):
        probe_channel(name, conf.get(name, {}))
    print('done.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
