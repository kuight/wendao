# -*- coding: utf-8 -*-
"""Answer judging for xinmo (error-book) v1 -- 'answer first, judge then'.

Pure judging for choice/numeric; expression judging optionally calls an LLM
(config injected by caller). openended / empty standard answer -> 'unknown'.

judge() returns a dict:
  {'judged': 'correct'|'wrong'|'unknown', 'reason': <ascii code>, 'hint': <optional>}
UI-facing chinese text is NOT produced here; the front-end maps 'reason'/'hint'
codes via i18n. Kept ASCII-only per project rule.
"""
import re
import json
import urllib.request
import urllib.error


def _norm_choice(s):
    # keep only letters, uppercase, sorted (so 'BA' == 'AB' for multi-select)
    letters = [c for c in s.upper() if c.isalpha()]
    return ''.join(sorted(letters))


def _extract_number(s):
    """Return (number, had_unit) or (None, False). Grabs first signed float."""
    if s is None:
        return None, False
    m = re.search(r'[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?', s)
    if not m:
        return None, False
    num = float(m.group(0))
    rest = (s[:m.start()] + s[m.end():]).strip()
    had_unit = bool(re.search(r'[a-zA-Z\u00b5\u03a9%]', rest))
    return num, had_unit


def judge_choice(my, std):
    a, b = _norm_choice(my), _norm_choice(std)
    if not a:
        return {'judged': 'unknown', 'reason': 'empty_input'}
    return {'judged': 'correct' if a == b else 'wrong', 'reason': 'choice_cmp'}


def judge_numeric(my, std):
    mynum, my_unit = _extract_number(my)
    stdnum, std_unit = _extract_number(std)
    if stdnum is None:
        return {'judged': 'unknown', 'reason': 'no_std_number'}
    if mynum is None:
        return {'judged': 'unknown', 'reason': 'no_input_number'}
    if stdnum == 0:
        ok = abs(mynum - stdnum) < 1e-9
    else:
        ok = abs(mynum - stdnum) / abs(stdnum) <= 0.01  # 1% relative
    res = {'judged': 'correct' if ok else 'wrong', 'reason': 'numeric_cmp'}
    if ok and std_unit and not my_unit:
        res['hint'] = 'unit_missing'  # correct number but user omitted unit
    return res


def _llm_equal(my, std, cfg):
    """Ask LLM whether two expressions are equivalent. Return 'EQUAL'|'DIFF'|None."""
    base_url = (cfg.get('base_url') or '').rstrip('/')
    api_key = cfg.get('api_key') or ''
    model = cfg.get('model') or ''
    if not (base_url and api_key and model):
        return None
    prompt = (
        "You are a strict math/physics answer checker. Decide if the STUDENT answer is "
        "mathematically equivalent to the STANDARD answer. Reply with exactly one word: "
        "EQUAL or DIFF. No explanation.\n"
        "STANDARD: " + (std or '') + "\nSTUDENT: " + (my or '')
    )
    body = {
        'model': model,
        'messages': [{'role': 'user', 'content': prompt}],
        'max_tokens': 4,
        'temperature': 0,
    }
    req = urllib.request.Request(base_url + '/chat/completions',
                                 data=json.dumps(body).encode('utf-8'), method='POST')
    req.add_header('Content-Type', 'application/json')
    req.add_header('Authorization', 'Bearer ' + api_key)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            j = json.loads(resp.read().decode('utf-8', 'replace'))
        txt = j['choices'][0]['message']['content'].strip().upper()
        if 'EQUAL' in txt:
            return 'EQUAL'
        if 'DIFF' in txt:
            return 'DIFF'
        return None
    except Exception:
        return None


def judge_expression(my, std, cfg):
    if not (my or '').strip():
        return {'judged': 'unknown', 'reason': 'empty_input'}
    if not (std or '').strip():
        return {'judged': 'unknown', 'reason': 'no_std_answer'}
    verdict = _llm_equal(my, std, cfg or {})
    if verdict == 'EQUAL':
        return {'judged': 'correct', 'reason': 'llm_equal'}
    if verdict == 'DIFF':
        return {'judged': 'wrong', 'reason': 'llm_diff'}
    return {'judged': 'unknown', 'reason': 'llm_unavailable'}


def judge(question_type, my_answer, std_answer, cfg=None):
    """Dispatch by question_type. Empty std answer or openended -> unknown."""
    qt = question_type or 'openended'
    std = std_answer or ''
    if qt == 'openended' or not std.strip():
        return {'judged': 'unknown', 'reason': 'openended_or_no_std'}
    if qt == 'choice':
        return judge_choice(my_answer or '', std)
    if qt == 'numeric':
        return judge_numeric(my_answer or '', std)
    if qt == 'expression':
        return judge_expression(my_answer or '', std, cfg or {})
    return {'judged': 'unknown', 'reason': 'unknown_type'}
