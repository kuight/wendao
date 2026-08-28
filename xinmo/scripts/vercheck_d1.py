# -*- coding: utf-8 -*-
"""D1 acceptance: insert 3, restart-persistence (db exists), today list, one scoring, anti-loop."""
import json
import urllib.request
import sqlite3

BASE = 'http://127.0.0.1:8092'

def req(path, method='GET', body=None):
    url = BASE + path
    data = json.dumps(body).encode('utf-8') if body is not None else None
    r = urllib.request.Request(url, data=data, method=method)
    if data:
        r.add_header('Content-Type', 'application/json')
    with urllib.request.urlopen(r, timeout=10) as resp:
        return json.loads(resp.read().decode('utf-8'))

probs = [
    {'subject':'physics','topic':'kin-uniform-accel','topic_label':'yun-su-bian-zhi-xian','error_type':'formula','question_type':'numeric','note':'v2-v02=2ax wrong','source':'0828wuli','answer_text':'4 m/s'},
    {'subject':'physics','topic':'new-second-law','topic_label':'niu-dun-di-er','error_type':'concept','question_type':'choice','note':'force-accel dir','source':'0828wuli','answer_text':'B'},
    {'subject':'physics','topic':'work-ke-theorem','topic_label':'dong-neng-ding-li','error_type':'calc','question_type':'numeric','note':'sign wrong','source':'0829wanlian','answer_text':'12 J'},
]

print('=== insert 3 ===')
ids = []
for pr in probs:
    d = req('/api/problem', 'POST', pr)
    assert d['ok'], d
    ids.append(d['problem']['id'])
    print('  id=%s topic=%s' % (d['problem']['id'], d['problem']['topic']))

print('=== today queue (expect 3 new) ===')
t = req('/api/today')
q = t['queue']
print('  queue len=%d on_the_way=%d' % (len(q), t['on_the_way']))
assert len(q) == 3, 'expected 3 new in queue, got %d' % len(q)

print('=== good on first (expect interval=1 streak=1, leaves queue) ===')
d = req('/api/attempt', 'POST', {'problem_id': ids[0], 'result': 'good', 'seconds': 15})
p = d['problem']
print('  ease=%s interval=%s streak=%s due=%s state=%s' % (p['ease'], p['interval_days'], p['streak'], p['due_date'], p['state']))
assert p['streak'] == 1 and p['interval_days'] == 1, 'first good should give interval=1 streak=1'
t = req('/api/today')
assert not any(it['id'] == ids[0] for it in t['queue']), 'finished problem should leave today queue'
print('  left today queue OK')

print('=== again on third (expect streak=0, re-queued today) ===')
d2 = req('/api/attempt', 'POST', {'problem_id': ids[2], 'result': 'again', 'seconds': 40})
p2 = d2['problem']
print('  ease=%s interval=%s streak=%s due=%s' % (p2['ease'], p2['interval_days'], p2['streak'], p2['due_date']))
assert p2['streak'] == 0 and p2['interval_days'] == 0, 'again resets streak and interval'
t2 = req('/api/today')
assert any(it['id'] == ids[2] for it in t2['queue']), 'again should re-queue today'
print('  re-queued today OK')

print('=== second same-day again (anti-loop: must NOT re-appear today) ===')
d3 = req('/api/attempt', 'POST', {'problem_id': ids[2], 'result': 'again', 'seconds': 50})
p3 = d3['problem']
t3 = req('/api/today')
present = any(it['id'] == ids[2] for it in t3['queue'])
print('  id=%d present today=%s due=%s' % (ids[2], present, p3['due_date']))
assert not present, 'second same-day submit must not re-appear today'

print('=== stats ===')
s = req('/api/stats')
print('  total=%d refined=%d active=%d physics_active=%d' % (s['total'], s['refined'], s['active'], s['by_subject']['physics']))

# db persistence: db file exists and rows are there
conn = sqlite3.connect('data/xinmo.db')
n = conn.execute('SELECT COUNT(*) FROM problem').fetchone()[0]
conn.close()
print('  db rows=%d' % n)
assert n == 3, 'expected 3 rows in db'

print('ALL D1 CHECKS PASSED')