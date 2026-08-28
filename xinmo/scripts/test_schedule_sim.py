# -*- coding: utf-8 -*-
"""D4: pure-function scheduling simulation + rule tests (no server, no IO).

Covers: again/hard/good transitions, ease clamps, interval cap, refine exit,
rebound penalty (once only), queue cap, rebound cap + scatter, and a 30-day
multi-problem simulation. Run: python scripts/test_schedule_sim.py
"""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import schedule as sch


def fresh(pid=1, day=0):
    return {'id': pid, 'ease': 2.5, 'interval_days': 0, 'streak': 0,
            'state': 'active', 'due_date': day, 'rebound_at': None}


def check(name, cond):
    print(('  OK  ' if cond else '  FAIL ') + name)
    assert cond, name


print('=== single-result transitions ===')
p = sch.apply_result(fresh(), 'good', 0)
check('good1: streak=1 itv=1 ease=2.6', p['streak'] == 1 and p['interval_days'] == 1 and p['ease'] == 2.6)
p = sch.apply_result(fresh(), 'hard', 0)
check('hard: streak=1 itv>=1 ease=2.35', p['streak'] == 1 and p['interval_days'] >= 1 and p['ease'] == 2.35)
p = sch.apply_result(fresh(), 'again', 0)
check('again: streak=0 itv=0 ease=2.3', p['streak'] == 0 and p['interval_days'] == 0 and p['ease'] == 2.3)

print('=== ease clamps ===')
lo = fresh(); lo['ease'] = 1.3
lo = sch.apply_result(lo, 'again', 0)
check('ease floor 1.3', lo['ease'] == 1.3)
hi = fresh(); hi['ease'] = 3.0
hi = sch.apply_result(hi, 'good', 0)
check('ease ceil 3.0', hi['ease'] == 3.0)

print('=== interval cap 60 ===')
big = fresh(); big['ease'] = 3.0; big['interval_days'] = 50; big['streak'] = 5
big = sch.apply_result(big, 'good', 0)
check('interval capped <=60', big['interval_days'] <= 60)

print('=== hard never refines (streak grows but stays active) ===')
h = fresh()
for _ in range(10):
    h = sch.apply_result(h, 'hard', 0)
check('hard stays active after 10x', h['state'] == 'active')

print('=== 4x good refines after #4, appear days as IMPLEMENTED ===')
p = fresh(); day = 0; appears = []
for k in range(6):
    day = int(p['due_date']); appears.append(day)
    p = sch.apply_result(p, 'good', day)
    p['due_date'] = day + p['interval_days']
    if p['state'] == 'refined':
        break
print('    implemented appear days =', appears, '(refined after good#%d)' % (k + 1))
check('refined after 4th good', p['state'] == 'refined' and (k + 1) == 4)

print('=== rebound penalty applies once ===')
rb = [fresh(pid=1)]; rb[0]['due_date'] = 0
today = 10  # overdue by 10 (>3)
n1 = sch.apply_rebound_penalties(rb, today)
check('penalized once', n1 == 1 and rb[0]['rebound_at'] == today)
n2 = sch.apply_rebound_penalties(rb, today + 1)
check('no second penalty', n2 == 0)

print('=== queue cap 15 ===')
many = []
for i in range(30):
    q = fresh(pid=i); q['due_date'] = 5; q['interval_days'] = 0  # all new due day5
    many.append(q)
queue, reb, otw = sch.build_today(many, 5)
check('queue capped at 15', len(queue) == 15)

print('=== rebound cap 20 + scatter ===')
rbs = []
for i in range(25):
    q = fresh(pid=100 + i); q['due_date'] = 0  # overdue by 30 -> rebound
    rbs.append(q)
queue, reb, otw = sch.build_today(rbs, 30)
check('rebound list <=20', len(reb) <= 20)
check('overflow scattered on_the_way=5', otw == 5)

print('=== 30-day multi-problem simulation (no crash, invariants hold) ===')
import random
random.seed(7)
pool = [fresh(pid=i, day=0) for i in range(8)]
for i, q in enumerate(pool):
    q['due_date'] = i % 4
for day in range(30):
    sch.apply_rebound_penalties(pool, day)
    queue, reb, otw = sch.build_today(pool, day)
    for item in queue:
        # simulate a user: 60% good, 25% hard, 15% again
        r = random.random()
        res = 'good' if r < 0.6 else ('hard' if r < 0.85 else 'again')
        src = next(x for x in pool if x['id'] == item['id'])
        np = sch.apply_result(src, res, day)
        np['due_date'] = day + np['interval_days']
        for kk in ('ease', 'interval_days', 'streak', 'state', 'due_date'):
            src[kk] = np[kk]
        assert sch.EASE_MIN <= src['ease'] <= sch.EASE_MAX, 'ease out of range %s' % src['ease']
        assert 0 <= src['interval_days'] <= sch.INTERVAL_MAX, 'interval out of range %s' % src['interval_days']
check('30-day sim invariants held (ease/interval in range every step)', True)
refined = sum(1 for x in pool if x['state'] == 'refined')
print('    after 30 days: refined=%d/%d' % (refined, len(pool)))

print('ALL D4 SCHEDULE TESTS PASSED')
