# 09 · Token lifecycle notes

## Current PAT

- preset name in supervisor: kuight_wendao_steward_token
- used by G5.13b, G8b, G10d, G12, G13, G14, G16, G17b, G18, G19, G20, G21, G22 attempt, G23, G24, G25, G26, G27, G28, G29, G30
- status as of G30: Kuight explicitly asked NOT to rotate while Phase 8-12 work was ongoing. Rotation should be requested at any new write task.

## Sandbox pattern

- inject via heredoc into /tmp/<seed>/tok, chmod 600, export TOK=$(cat /tmp/<seed>/tok)
- use Authorization: Bearer header on every call
- never echo $TOK to stdout, never write to commit message / PR body / branch name
- cleanup: shred -u /tmp/<seed>/tok; unset TOK GHTOKEN AUTH; rm -rf /tmp/<seed>; history -c; verify LEAK=0

## Hard rules (from L02, L13)

- PAT must never appear in any text the user can quote back at us (no echo, no return, no file other than the seed).
- One PAT per phase boundary; revoke at https://github.com/settings/tokens after each phase closure.
- When new PAT received, update preset kuight_wendao_steward_token immediately. Do not reuse a revoked one.
- On 401/403, STOP — never re-attempt with a fabricated token (L03).
