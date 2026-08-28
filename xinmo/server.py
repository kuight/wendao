# -*- coding: utf-8 -*-
"""xinmo (错题心魔) v1 local server.

FastAPI + uvicorn on port 8092. Single-page front-end in web/index.html.
Runs with:  cd xinmo && python -m uvicorn server:app --port 8092
"""
import json
import os
import sqlite3
import hashlib
import io
import zipfile
from pathlib import Path

from fastapi import FastAPI, Request, UploadFile, File, Form
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles

import schedule as sch

BASE = Path(__file__).resolve().parent
DATA = BASE / 'data'
DB_PATH = DATA / 'xinmo.db'
IMAGES = DATA / 'images'
TOPICS_PATH = DATA / 'topics.json'

app = FastAPI(title='xinmo')

SUBJECTS = ['physics', 'chemistry', 'geography', 'chinese', 'math', 'english']
# Subject code -> chinese display name
SUBJECT_LABEL = {
    'physics': '物理', 'chemistry': '化学', 'geography': '地理',
    'chinese': '语文', 'math': '数学', 'english': '英语',
}
QUESTION_TYPES = ['choice', 'numeric', 'expression', 'openended']
ERROR_TYPES = ['concept', 'formula', 'calc', 'reading']
ERROR_LABEL = {'concept': '概念不会', 'formula': '公式记错', 'calc': '计算失误', 'reading': '审题错'}


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


# ---------- classify (D1: fixed value; D2+ would call LLM) ----------
@app.post('/api/classify')
async def classify(payload: dict):
    # v1.1: knowledge point classification is manual (two-level pick from topics.json).
    # LLM classify is deferred to v2. Return a fixed fallback; the UI does the picking.
    return JSONResponse({'topic': 'other', 'topic_label': '未分类', 'error_type': 'concept', 'hint': ''})


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
    today = sch.i2d(sch.days_today())

    conn = get_db()
    cur = conn.execute(
        'INSERT INTO problem (subject,topic,topic_label,error_type,question_type,note,answer_text,'
        'image_path,answer_image_path,source,created_at,due_date) '
        'VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        (subject, topic, topic_label, error_type, question_type, note, answer_text,
         image_path, answer_image_path, source, today, today))
    pid = cur.lastrowid
    conn.commit()
    row = conn.execute('SELECT * FROM problem WHERE id=?', (pid,)).fetchone()
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


# ---------- attempt ----------
@app.post('/api/attempt')
async def attempt(payload: dict):
    pid = payload.get('problem_id')
    result = payload.get('result')  # again|hard|good
    seconds = int(payload.get('seconds') or 0)
    my_answer = payload.get('my_answer') or ''
    judged = payload.get('judged') or 'unknown'
    note_add = payload.get('note') or ''  # optional "这次错在哪" text
    if result not in ('again', 'hard', 'good'):
        return JSONResponse({'ok': False, 'error': 'bad result'}, status_code=400)

    ts = sch.i2d(sch.days_today())
    conn = get_db()
    row = conn.execute('SELECT * FROM problem WHERE id=?', (pid,)).fetchone()
    if row is None:
        conn.close()
        return JSONResponse({'ok': False, 'error': 'no such problem'}, status_code=404)

    # count today's attempts for this problem (anti re-queue loop)
    n_today = conn.execute(
        "SELECT COUNT(*) FROM attempt WHERE problem_id=? AND ts=?", (pid, ts)).fetchone()[0]
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
        added = conn.execute('SELECT COUNT(*) FROM problem WHERE created_at=?', (day,)).fetchone()[0]
        redone = conn.execute('SELECT COUNT(*) FROM attempt WHERE ts=?', (day,)).fetchone()[0]
        daily.append({'date': day, 'added': added, 'redone': redone})
    conn.close()
    return JSONResponse({
        'total': total, 'refined': refined, 'active': active,
        'by_subject': by_subject, 'by_error': by_error, 'daily': daily,
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