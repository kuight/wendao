# Pure scheduling logic for xinmo (error-book) v1.
# No I/O here. Dates are passed as integer day numbers (days since epoch).
# Imported by server.py and the simulation test script.

EASE_MIN = 1.3
EASE_MAX = 3.0
INTERVAL_MAX = 60
QUEUE_CAP = 15
REBOUND_CAP = 20


def clamp(v, lo, hi):
    return max(lo, min(hi, v))


def apply_result(p, result, today_days):
    """Apply one review result ('again'|'hard'|'good') to problem dict p.

    Returns a new dict. today_days unused here but kept for signature symmetry.
    """
    p = dict(p)
    e = clamp(p['ease'], EASE_MIN, EASE_MAX)
    itv = p['interval_days']
    streak = p['streak']
    if result == 'again':
        e -= 0.2
        itv = 0
        streak = 0
    elif result == 'hard':
        e -= 0.15
        itv = max(1, itv * 1.2)
        streak += 1
    else:  # good
        e += 0.1
        streak += 1
        if streak == 1:
            itv = 1
        elif streak == 2:
            itv = 3
        else:
            itv = itv * e
    e = clamp(e, EASE_MIN, EASE_MAX)
    itv = clamp(itv, 0, INTERVAL_MAX)
    p['ease'] = round(e, 2)
    p['interval_days'] = round(itv, 2)
    p['streak'] = streak
    if streak >= 3 and itv >= 14:
        p['state'] = 'refined'
    return p


def is_rebound(p, today_days):
    """Active problem overdue by more than 3 days."""
    return p.get('state') == 'active' and (today_days - p['due_date']) > 3


def apply_rebound_penalties(problems, today_days):
    """First-time rebound penalty.

    A rebound problem keeps its due_date (so it stays pinned at the top of the
    queue until reviewed). Penalty applies only once, tracked by rebound_at.
    When it is first penalized we set rebound_at=today; later passes see it set
    and skip. Mutates dicts in place. Returns count penalized this call.
    """
    count = 0
    for p in problems:
        if p.get('state') == 'active' and is_rebound(p, today_days):
            if p.get('rebound_at') is None:
                p['ease'] = round(clamp(p['ease'] - 0.1, EASE_MIN, EASE_MAX), 2)
                p['interval_days'] = 1
                p['rebound_at'] = today_days
                count += 1
    return count


def build_today(problems, today_days):
    """Build today's queue.

    Returns (queue, rebound_list, on_the_way).
    queue: list of dicts (problem data + kind), capped at QUEUE_CAP.
    rebound_list: active rebounds occupying slots (<=REBOUND_CAP).
    on_the_way: count of rebounds scattered to future days (>REBOUND_CAP).
    """
    import random
    active = [p for p in problems if p.get('state') == 'active']
    rebound = [p for p in active if is_rebound(p, today_days)]
    rebound.sort(key=lambda x: x['due_date'])

    on_the_way = 0
    if len(rebound) > REBOUND_CAP:
        excess = rebound[REBOUND_CAP:]
        rebound = rebound[:REBOUND_CAP]
        for p in excess:
            p['due_date'] = today_days + random.randint(2, 5)
        on_the_way = len(excess)

    buckets = {
        'rebound': rebound,
        'overdue': [p for p in active if p['due_date'] < today_days and not is_rebound(p, today_days)],
        'due': [p for p in active if p['due_date'] == today_days and p['interval_days'] > 0],
        'new': [p for p in active if p['due_date'] == today_days and p['interval_days'] == 0],
    }
    kind_for = {'rebound': 'rebound', 'overdue': 'overdue', 'due': 'due', 'new': 'new'}

    queue = []
    seen = set()
    for bucket_key in ['rebound', 'overdue', 'due', 'new']:
        for p in buckets[bucket_key]:
            pid = p['id']
            if pid in seen:
                continue
            seen.add(pid)
            item = dict(p)
            item['kind'] = bucket_key
            queue.append(item)
            if len(queue) >= QUEUE_CAP:
                return queue, rebound, on_the_way
    return queue, rebound, on_the_way


def days_today():
    """Integer day number for today (server's local date)."""
    from datetime import date
    return date.today().toordinal()


def d2i(dstr):
    """YYYY-MM-DD -> integer ordinal day number."""
    from datetime import date
    y, m, d = (int(x) for x in dstr.split('-'))
    return date(y, m, d).toordinal()


def i2d(dayint):
    """Integer ordinal day number -> YYYY-MM-DD."""
    from datetime import date
    d = date.fromordinal(dayint)
    return '%04d-%02d-%02d' % (d.year, d.month, d.day)