---
name: atomic-commits
description: Split work into many small, coherent, per-module git commits instead of one giant commit. Use when the user asks to commit, commit-and-push, or to "add more commits"; triggers on "commit", "commit and push", "commit per module", "many commits", "atomic commits", "granular commits", "damihan ang commits", "madaming commit", "i-commit".
---

# Atomic, per-module commits

When asked to commit — and especially "commit and push" — do **not** make one giant
commit. Produce **many small commits**, each one logical, coherent, and connected to
the next (dependency order), so history reads like a build-up of the work.

The number of commits is not the goal by itself; a **connected, reviewable history**
is. Each commit should be explainable in one line.

## Rules

1. **One logical unit per commit** — a module, layer, feature, entity, widget, page,
   test suite, tooling or docs change. Never bundle unrelated areas.
2. **Keep connected files together** — a feature's component + its barrel + its model
   + its styles belong in the same commit.
3. **Order by dependency** so each commit builds on the previous:
   `shared/types` → `shared/config` + `shared/lib` + `shared/ui` → `entities` →
   `shared/db` → `features` → `widgets` → `pages` → `app` → tests → tooling/docs.
4. **Conventional Commits**, scope where useful:
   `feat(scope): ...`, `fix(scope): ...`, `refactor(scope): ...`,
   `test(scope): ...`, `chore(scope): ...`, `docs: ...`.
5. **Stage explicitly per commit**: `git add -- <paths>`.
   Use `git add -A -- <paths>` when the commit includes **deletions**.
   Do **not** `git add -A` the whole tree except for a deliberate final catch-all.
6. **Never commit noise**: generated output (`dist`, `dev-dist`, `coverage`,
   `test-results`, `playwright-report`), `node_modules`, or secrets.
7. **Verify first**: run the project's typecheck, lint, and tests before committing
   (see HONESTY.md). Never silently commit a red state — report what is failing.
8. **Pushing is separate**: commit only unless the user asked to push. Never
   force-push unless the user explicitly says so.

## Procedure

1. Inspect: `git status --porcelain -uall`, `git diff`, `git log --oneline -5`.
2. Run the checks (typecheck / lint / tests / boundaries / build) and confirm green.
   If anything is red, stop and report before committing.
3. Build an ordered list of `{ message, paths[] }` groupings (dependency order).
4. For each grouping: `git add -A -- <paths>`; if nothing is staged, skip;
   else `git commit -m "<message>"`.
5. Report the resulting `git log --oneline` and the total count.
6. Push only if explicitly requested; otherwise state that commits are local.
