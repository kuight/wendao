# -*- coding: utf-8 -*-
"""xinmo (error-book) v1 local server.

FastAPI + uvicorn on port 8092. Single-page front-end in web/index.html.
Runs with:  cd xinmo && python -m uvicorn server:app --port 8092
"""
import json
import os
import sqlite3
import hashlib
import io
import zipfile
import time
from pathlib import Path

from fastapi import FastAPI, Request, UploadFile, File, Form
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles

from PIL import Image, ImageOps
from datetime import datetime

import schedule as sch
import judge as jdg

BASE = Path(__file__).resolve().parent
DATA = BASE / 'data'
DB_PATH = DATA / 'xinmo.db'
IMAGES = DATA / 'images'
TOPICS_PATH = DATA / 'topics.json'
LABELS_PATH = DATA / 'labels.json'
JSONL_PATH = DATA / 'problems.jsonl'
CONFIG_LOCAL = BASE / 'config.local.json'


def now_iso():
    """Full ISO-8601 timestamp to the second (e.g. 2026-08-28T14:32:07)."""
    return datetime.now().strftime('%Y-%m-%dT%H:%M:%S')


def load_config():
    for p in (CONFIG_LOCAL, BASE / 'config.example.json'):
        if p.exists():
            try:
                with open(p, encoding='utf-8') as f:
                    return json.load(f)
            except Exception:
                pass
    return {}

app = FastAPI(title='xinmo')

SUBJECTS = ['physics', 'chemistry', 'geography', 'chinese', 'math', 'english']
# Subject code -> chinese display name
def _load_labels():
    try:
        with open(LABELS_PATH, encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return {}
LABELS = _load_labels()
SUBJECT_LABEL = LABELS.get('subject', {})
QUESTION_TYPES = ['choice', 'numeric', 'expression', 'openended']
ERROR_TYPES = ['concept', 'formula', 'calc', 'reading']
ERROR_LABEL = LABELS.get('error', {})


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    IMAGES.mkdir(parents=True, exist_ok=True)
    conn = get_db()
    conn.executescript('''
    CREATE TABLE IF NOT EXISTS problem (
      id INTEGER PRIMARY KEY,
      subject TEXT NOT NULL,
      topic TEXT NOT NULL,
      topic_label TEXT NOT NULL,
      error_type TEXT NOT NULL,
      question_type TEXT NOT NULL DEFAULT 'openended',
      note TEXT,
      answer_text TEXT,
      image_path TEXT,
      answer_image_path TEXT,
      source TEXT,
      created_at TEXT NOT NULL,
      ease REAL NOT NULL DEFAULT 2.5,
      interval_days REAL NOT NULL DEFAULT 0,
      due_date TEXT NOT NULL,
      streak INTEGER NOT NULL DEFAULT 0,
      state TEXT NOT NULL DEFAULT 'active',
      rebound_at TEXT
    );
    CREATE TABLE IF NOT EXISTS attempt (
      id INTEGER PRIMARY KEY,
      problem_id INTEGER NOT NULL,
      ts TEXT NOT NULL,
      my_answer TEXT,
      judged TEXT,
      result TEXT NOT NULL,
      seconds INTEGER
    );
    ''')
    conn.commit()
    conn.close()


def load_topics():
    with open(TOPICS_PATH, encoding='utf-8') as f:
        return json.load(f)


def problem_row_to_dict(r):
    return {
        'id': r['id'],
        'subject': r['subject'],
        'subject_label': SUBJECT_LABEL.get(r['subject'], r['subject']),
        'topic': r['topic'],
        'topic_label': r['topic_label'],
        'error_type': r['error_type'],
        'error_label': ERROR_LABEL.get(r['error_type'], r['error_type']),
        'question_type': r['question_type'],
        'note': r['note'],
        'answer_text': r['answer_text'],
        'image_path': r['image_path'],
        'answer_image_path': r['answer_image_path'],
        'source': r['source'],
        'created_at': r['created_at'],
        'ease': r['ease'],
        'interval_days': r['interval_days'],
        'due_date': r['due_date'],
        'streak': r['streak'],
        'state': r['state'],
        'rebound_at': r['rebound_at'],
    }


def row_to_sched(r):
    """Convert a sqlite Row to a dict usable by schedule.py (dates as int days)."""
    d = problem_row_to_dict(r)
    d['due_date'] = sch.d2i(d['due_date'])
    return d


def sched_to_json(p):
    d = dict(p)
    d['due_date'] = sch.i2d(d['due_date'])
    return d


# ---------- static ----------
# Ensure data/images exists before mounting (clean first-run has no data dir yet).
IMAGES.mkdir(parents=True, exist_ok=True)
app.mount('/web', StaticFiles(directory=str(BASE / 'web')), name='web')
app.mount('/images', StaticFiles(directory=str(IMAGES)), name='images')


@app.on_event("startup")
def _startup():
    init_db()


@app.get('/')
def index():
    return FileResponse(BASE / 'web' / 'index.html')


@app.get('/api/topics')
def topics():
    return JSONResponse(load_topics())


# ---------- image upload ----------
MAX_WIDTH = 1400
JPEG_QUALITY = 82
MAX_BYTES = 300 * 1024


def _compress_to_jpeg(raw):
    """Return JPEG bytes: EXIF-rotated, width<=MAX_WIDTH, <=MAX_BYTES via quality step-down."""
    im = Image.open(io.BytesIO(raw))
    im = ImageOps.exif_transpose(im)
    if im.mode not in ('RGB', 'L'):
        im = im.convert('RGB')
    elif im.mode == 'L':
        im = im.convert('RGB')
    if im.width > MAX_WIDTH:
        h = int(round(im.height * MAX_WIDTH / float(im.width)))
        im = im.resize((MAX_WIDTH, h), Image.LANCZOS)
    q = JPEG_QUALITY
    while True:
        buf = io.BytesIO()
        im.save(buf, format='JPEG', quality=q, optimize=True)
        data = buf.getvalue()
        if len(data) <= MAX_BYTES or q <= 40:
            break
        q -= 8
    # if still too big at q=40, progressively shrink width
    while len(data) > MAX_BYTES and im.width > 500:
        neww = int(im.width * 0.85)
        newh = int(round(im.height * neww / float(im.width)))
        im = im.resize((neww, newh), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, format='JPEG', quality=40, optimize=True)
        data = buf.getvalue()
    return data


@app.post('/api/upload')
async def upload(file: UploadFile = File(...), pid: str = Form('tmp'), kind: str = Form('q')):
    if kind not in ('q', 'a'):
        kind = 'q'
    raw = await file.read()
    if not raw:
        return JSONResponse({'ok': False, 'error': 'empty file'}, status_code=400)
    try:
        data = _compress_to_jpeg(raw)
    except Exception as e:
        return JSONResponse({'ok': False, 'error': 'not an image: %s' % e}, status_code=400)
    import datetime
    ym = datetime.date.today().strftime('%Y-%m')
    subdir = IMAGES / ym
    subdir.mkdir(parents=True, exist_ok=True)
    shash = hashlib.sha1(data + str(time.time()).encode()).hexdigest()[:8]
    safe_pid = ''.join(c for c in str(pid) if c.isalnum()) or 'tmp'
    fname = '%s_%s_%s.jpg' % (safe_pid, kind, shash)
    (subdir / fname).write_bytes(data)
    web_path = '/images/%s/%s' % (ym, fname)
    return JSONResponse({'ok': True, 'path': web_path, 'bytes': len(data)})


# ---------- classify (D1: fixed value; D2+ would call LLM) ----------
@app.post('/api/classify')
async def classify(payload: dict):
    # v1.1: knowledge point classification is manual (two-level pick from topics.json).
    # LLM classify is deferred to v2. Return a fixed fallback; the UI does the picking.
    return JSONResponse({'topic': 'other', 'topic_label': LABELS.get('classify_topic_label', 'other'), 'error_type': 'concept', 'hint': ''})


def _append_problem_jsonl(row):
    """Append one line to data/problems.jsonl (audit trail). Never blocks main flow."""
    try:
        rec = {
            'id': row['id'], 'created_at': row['created_at'], 'subject': row['subject'],
            'topic': row['topic'], 'topic_label': row['topic_label'], 'source': row['source'],
            'image_path': row['image_path'], 'answer_text': row['answer_text'],
        }
        with open(JSONL_PATH, 'a', encoding='utf-8') as f:
            f.write(json.dumps(rec, ensure_ascii=False) + '\n')
    except Exception:
        pass  # audit failure must not block recording


# ---------- problem ----------
@app.post('/api/problem')
async def create_problem(payload: dict):
    subject = payload.get('subject', '')
    topic = payload.get('topic', '')
    topic_label = payload.get('topic_label', '')
    error_type = payload.get('error_type', 'concept')
    question_type = payload.get('question_type', 'openended')
    if question_type not in QUESTION_TYPES:
        question_type = 'openended'
    if error_type not in ERROR_TYPES:
        error_type = 'concept'
    note = payload.get('note') or ''
    answer_text = payload.get('answer_text') or ''
    image_path = payload.get('image_path') or ''
    answer_image_path = payload.get('answer_image_path') or ''
    source = payload.get('source') or ''
    if not image_path:
        return JSONResponse({'ok': False, 'error': 'image required'}, status_code=400)
    today = sch.i2d(sch.days_today())

    conn = get_db()
    cur = conn.execute(
        'INSERT INTO problem (subject,topic,topic_label,error_type,question_type,note,answer_text,'
        'image_path,answer_image_path,source,created_at,due_date) '
        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        (subject, topic, topic_label, error_type, question_type, note, answer_text,
         image_path, answer_image_path, source, now_iso(), today))
    pid = cur.lastrowid
    conn.commit()
    row = conn.execute('SELECT * FROM problem WHERE id=?', (pid,)).fetchone()
    _append_problem_jsonl(row)
    conn.close()
    return JSONResponse({'ok': True, 'problem': problem_row_to_dict(row)})


# ---------- today ----------
@app.get('/api/today')
def today():
    today_i = sch.days_today()
    conn = get_db()
    rows = conn.execute("SELECT * FROM problem WHERE state='active'").fetchall()
    problems = [row_to_sched(r) for r in rows]
    sch.apply_rebound_penalties(problems, today_i)
    # persist any rebound_at / due_date scatter changes
    for p in problems:
        if 'rebound_at' in p and p['rebound_at'] is not None:
            conn.execute('UPDATE problem SET rebound_at=?, ease=?, interval_days=?, due_date=? WHERE id=?',
                         (sch.i2d(p['rebound_at']), p['ease'], p['interval_days'], sch.i2d(p['due_date']), p['id']))
    conn.commit()
    queue, rebound_list, on_the_way = sch.build_today(problems, today_i)

    def enrich(item):
        d = sched_to_json(item)
        # last attempt info for display
        r = conn.execute('SELECT result, judged, ts FROM attempt WHERE problem_id=? ORDER BY id DESC LIMIT 1',
                         (item['id'],)).fetchone()
        d['last_attempt'] = {'result': r['result'], 'judged': r['judged'], 'ts': r['ts']} if r else None
        return d

    out = {
        'date': sch.i2d(today_i),
        'queue': [enrich(q) for q in queue],
        'rebound': [enrich(q) for q in rebound_list],
        'on_the_way': on_the_way,
    }
    conn.close()
    return JSONResponse(out)


# ---------- judge (D3: answer-first, judge-then) ----------
@app.post('/api/judge')
async def judge_answer(payload: dict):
    pid = payload.get('problem_id')
    my_answer = payload.get('my_answer') or ''
    conn = get_db()
    row = conn.execute('SELECT * FROM problem WHERE id=?', (pid,)).fetchone()
    conn.close()
    if row is None:
        return JSONResponse({'ok': False, 'error': 'no such problem'}, status_code=404)
    cfg = load_config().get('text', {})
    verdict = jdg.judge(row['question_type'], my_answer, row['answer_text'], cfg)
    return JSONResponse({
        'ok': True,
        'judged': verdict['judged'],           # correct|wrong|unknown
        'reason': verdict.get('reason', ''),
        'hint': verdict.get('hint', ''),
        'question_type': row['question_type'],
        'answer_text': row['answer_text'] or '',
        'answer_image_path': row['answer_image_path'] or '',
    })


# ---------- attempt ----------
@app.post('/api/attempt')
async def attempt(payload: dict):
    pid = payload.get('problem_id')
    result = payload.get('result')  # again|hard|good
    seconds = int(payload.get('seconds') or 0)
    my_answer = payload.get('my_answer') or ''
    judged = payload.get('judged') or 'unknown'
    note_add = payload.get('note') or ''  # optional "where-wrong" text
    if result not in ('again', 'hard', 'good'):
        return JSONResponse({'ok': False, 'error': 'bad result'}, status_code=400)

    ts = now_iso()
    conn = get_db()
    row = conn.execute('SELECT * FROM problem WHERE id=?', (pid,)).fetchone()
    if row is None:
        conn.close()
        return JSONResponse({'ok': False, 'error': 'no such problem'}, status_code=404)

    # count today's attempts for this problem (anti re-queue loop); ts is full ISO -> compare date part
    today_s = sch.i2d(sch.days_today())
    n_today = conn.execute(
        "SELECT COUNT(*) FROM attempt WHERE problem_id=? AND substr(ts,1,10)=?", (pid, today_s)).fetchone()[0]
    conn.execute(
        'INSERT INTO attempt (problem_id, ts, my_answer, judged, result, seconds) VALUES (?,?,?,?,?,?)',
        (pid, ts, my_answer, judged, result, seconds))

    p = row_to_sched(row)
    newp = sch.apply_result(p, result, sch.days_today())
    # due_date in days
    due_i = sch.days_today() + newp['interval_days']
    # second submit today never re-appears today
    if n_today >= 1 and due_i == sch.days_today():
        due_i = sch.days_today() + 1

    # append note_add if provided
    if note_add:
        merged = (row['note'] or '') + ('\n' if row['note'] else '') + note_add
        conn.execute('UPDATE problem SET note=? WHERE id=?', (merged, pid))

    conn.execute(
        'UPDATE problem SET ease=?, interval_days=?, due_date=?, streak=?, state=? WHERE id=?',
        (newp['ease'], newp['interval_days'], sch.i2d(due_i), newp['streak'], newp['state'], pid))
    conn.commit()
    updated = conn.execute('SELECT * FROM problem WHERE id=?', (pid,)).fetchone()
    conn.close()
    return JSONResponse({'ok': True, 'problem': problem_row_to_dict(updated)})


# ---------- stats ----------
@app.get('/api/stats')
def stats():
    conn = get_db()
    total = conn.execute('SELECT COUNT(*) FROM problem').fetchone()[0]
    refined = conn.execute("SELECT COUNT(*) FROM problem WHERE state='refined'").fetchone()[0]
    active = conn.execute("SELECT COUNT(*) FROM problem WHERE state='active'").fetchone()[0]
    by_subject = {s: conn.execute('SELECT COUNT(*) FROM problem WHERE subject=? AND state=?', (s, 'active')).fetchone()[0] for s in SUBJECTS}
    by_error = {e: conn.execute('SELECT COUNT(*) FROM problem WHERE error_type=? AND state=?', (e, 'active')).fetchone()[0] for e in ERROR_TYPES}
    # last 14 days activity
    today_i = sch.days_today()
    daily = []
    for off in range(13, -1, -1):
        day = sch.i2d(today_i - off)
        added = conn.execute('SELECT COUNT(*) FROM problem WHERE substr(created_at,1,10)=?', (day,)).fetchone()[0]
        redone = conn.execute('SELECT COUNT(*) FROM attempt WHERE substr(ts,1,10)=?', (day,)).fetchone()[0]
        daily.append({'date': day, 'added': added, 'redone': redone})
    conn.close()
    return JSONResponse({
        'total': total, 'refined': refined, 'active': active,
        'by_subject': by_subject, 'by_error': by_error, 'daily': daily,
    })


# ---------- trace (D5: today list + knowledge tree + heatmap) ----------
@app.get('/api/trace')
def trace():
    conn = get_db()
    today_i = sch.days_today()
    today = sch.i2d(today_i)

    # --- 1. today list: entries created today + attempts today, newest first ---
    items = []
    for r in conn.execute(
            "SELECT id, topic_label, error_type, created_at FROM problem WHERE substr(created_at,1,10)=?",
            (today,)).fetchall():
        items.append({'kind': 'add', 'order': r['created_at'], 'topic_label': r['topic_label'],
                      'error_label': ERROR_LABEL.get(r['error_type'], r['error_type'])})
    for r in conn.execute(
            "SELECT a.id AS aid, a.ts, a.result, a.judged, p.topic_label, p.error_type "
            "FROM attempt a JOIN problem p ON a.problem_id=p.id WHERE substr(a.ts,1,10)=?",
            (today,)).fetchall():
        items.append({'kind': 'redo', 'order': r['ts'], 'topic_label': r['topic_label'],
                      'result': r['result'], 'judged': r['judged'],
                      'error_label': ERROR_LABEL.get(r['error_type'], r['error_type'])})
    items.sort(key=lambda x: x['order'], reverse=True)  # newest first (ISO timestamp desc)

    # --- 2. knowledge tree: per subject/chapter/topic state ---
    topics_data = load_topics()
    # gather per-topic aggregates
    agg = {}
    for r in conn.execute(
            "SELECT topic, state, streak, COUNT(*) AS n FROM problem GROUP BY topic, state, streak").fetchall():
        a = agg.setdefault(r['topic'], {'active': 0, 'refined': 0, 'reviewing': 0})
        if r['state'] == 'refined':
            a['refined'] += r['n']
        else:
            a['active'] += r['n']
            if r['streak'] and r['streak'] >= 1:
                a['reviewing'] += r['n']

    def node_state(tid):
        a = agg.get(tid)
        if not a:
            return 'unseen'          # gray
        if a['refined'] > 0:
            return 'refined'         # bright
        if a['reviewing'] > 0:
            return 'reviewing'       # yellow
        if a['active'] > 0:
            return 'active'          # white
        return 'unseen'

    tree = {}
    subject_summary = {}
    for subj in SUBJECTS:
        sd = topics_data.get(subj) or {}
        chapters = sd.get('chapters') or []
        out_ch = []
        total_topics = seen_topics = refined_topics = 0
        for ch in chapters:
            out_topics = []
            for tp in ch.get('topics', []):
                total_topics += 1
                st = node_state(tp['id'])
                a = agg.get(tp['id'], {})
                if st != 'unseen':
                    seen_topics += 1
                if st == 'refined':
                    refined_topics += 1
                out_topics.append({'id': tp['id'], 'label': tp['label'], 'state': st,
                                   'active': a.get('active', 0), 'refined': a.get('refined', 0)})
            out_ch.append({'name': ch.get('name', ''), 'topics': out_topics})
        tree[subj] = out_ch
        subject_summary[subj] = {'label': SUBJECT_LABEL.get(subj, subj),
                                 'total': total_topics, 'seen': seen_topics, 'refined': refined_topics}

    # --- 3. heatmap: last 90 days action counts + current streak ---
    days = []
    for off in range(89, -1, -1):
        day = sch.i2d(today_i - off)
        added = conn.execute('SELECT COUNT(*) FROM problem WHERE substr(created_at,1,10)=?', (day,)).fetchone()[0]
        redone = conn.execute('SELECT COUNT(*) FROM attempt WHERE substr(ts,1,10)=?', (day,)).fetchone()[0]
        days.append({'date': day, 'count': added + redone})
    # current consecutive-days streak ending today (or yesterday) with any action
    streak = 0
    i = len(days) - 1
    # allow streak to count back from today; if today 0 but yesterday active, streak counts prior run ending yesterday
    while i >= 0 and days[i]['count'] > 0:
        streak += 1
        i -= 1
    if streak == 0 and len(days) >= 2 and days[-2]['count'] > 0:
        j = len(days) - 2
        while j >= 0 and days[j]['count'] > 0:
            streak += 1
            j -= 1

    conn.close()
    return JSONResponse({
        'date': today,
        'today_list': items,
        'tree': tree,
        'subject_summary': subject_summary,
        'heatmap': days,
        'streak': streak,
    })


# ---------- backup ----------
@app.get('/api/backup')
def backup():
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, 'w', zipfile.ZIP_DEFLATED) as z:
        if DB_PATH.exists():
            z.write(DB_PATH, 'xinmo.db')
        if IMAGES.exists():
            for f in sorted(IMAGES.rglob('*')):
                if f.is_file():
                    z.write(f, 'images/' + str(f.relative_to(IMAGES)))
    buf.seek(0)
    import datetime
    fname = 'xinmo-backup-' + datetime.date.today().isoformat() + '.zip'
    return JSONResponse({'ok': True, 'filename': fname, 'size': len(buf.getvalue()), 'data': 'base64'})