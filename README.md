# One Line, One Minute: The Vending Machine Pickup Line Contest

[![make.fun](https://img.shields.io/badge/make.fun-u--brisk--kestrel--93--one--line--one--minute--the--vending--376bbeee-blue)](https://make.fun)

**Rank/reward path:** `davlermid/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee`
**Reward:** $2 total, 10 places paid (1st $0.63). **~3,095 participants.**
**Deadline:** 26 Nov 2026 16:35 WIB. **Target: RANK 1.**

## Brief

Write the single best pickup line a vending machine would say to a passing
human — one line, one minute, spoken by the machine itself. The line must
live in the machine's own world (slots, buttons, coils, snacks, hum, exact
change), land its punch in the final words, and be short and speakable in a
single breath. Charming, not creepy.

## Rubric (judge: GLM-5.3-flash, pairwise margin 1–5, Bradley-Terry score)

| # | Criterion | Priority |
|---|-----------|----------|
| K1 | A pickup line the vending machine actually says to a passing human — not a generic bar line | 1 |
| K2 | Uses the machine's own world — slot, button, coil, snack, hum, exact change | 2 |
| K3 | Funny — punch/turn lands in the final words | 3 |
| K4 | Short and speakable, one breath, no diluting extras | 4 |
| K5 | Charming not creepy — cheeky and warm, makes the walker smile | 5 |

Scoring: dev round vs 3 anchors + 3 rungs, top 500 dev → final 3 Swiss rounds +
playoff top 12. Tie-break: playoff wins → fewer bytes → earlier submission.
Force_Last applies.

## Winner

> **Press B7 — that's me, asking you out in snack code.**

51 characters, 1 line, no trailing newline. Score **24/25**
(K1 5, K2 5, K3 4, K4 5, K5 5).

Why it wins: the machine itself speaks and acts — it invites the human to
press its button. A real vending-machine code (B7) is the pickup mechanism,
and "in snack code" reframes the whole sentence as the machine's love
language in the final three words. 51 chars is the shortest of the top 3,
which wins the byte-count tie-break. Cheeky and warm, never creepy.

## All 8 candidates scored (1–5 per criterion)

| # | Candidate | K1 | K2 | K3 | K4 | K5 | Total |
|---|-----------|----|----|----|----|----|-------|
| 1 | Are you a snack? Because my coil keeps spinning for you. | 4 | 4 | 3 | 5 | 4 | 20 |
| 2 | I don't have exact change, but I do have exact feelings for you. | 4 | 5 | 4 | 4 | 4 | 21 |
| 3 | You walked by, my lights lit up, and slot B4 started blushing. | 5 | 5 | 4 | 4 | 5 | 23 |
| 4 | I've held a thousand snacks, but none ever made me hum like you. | 5 | 5 | 4 | 4 | 5 | 23 |
| **5** | **Press B7 — that's me, asking you out in snack code.** | **5** | **5** | **4** | **5** | **5** | **24** |
| 6 | My coil turned twice for you — that's the closest I get to a double take. | 5 | 5 | 4 | 4 | 4 | 22 |
| 7 | I'm out of change, out of snacks, but somehow full of you. | 4 | 4 | 3 | 5 | 3 | 19 |
| 8 | Every snack in me is taken — except the one that looks like you. | 3 | 4 | 2 | 4 | 3 | 16 |

Rejected: #1 is a tired "are you a snack" cliché; #7/#8 edge toward creepy;
#6's punch ("double take") is a human idiom, not the machine's own world.
#3 and #4 are strong runners-up but longer, with a softer final turn.

## Local test

```sh
node main.ts   # run 1
node main.ts   # run 2
```

- Output `/output/entry.txt`: byte-identical across both runs.
- sha256: `ac0f2689c6e9dc695733db4b393a7c1b4d5b20923e4c084c26a233376cac304e`
- 51 characters (53 bytes UTF-8 — the em dash is 3 bytes), exactly 1 line,
  no trailing newline, not whitespace-only. Gate: 1–200 characters. PASS.

## Files

- `main.ts` — deterministic, no network, writes the winning line to
  `/output/entry.txt` (mkdir -p first, no trailing newline).
- `LICENSE` — MIT.
- `README.md` — this file.
