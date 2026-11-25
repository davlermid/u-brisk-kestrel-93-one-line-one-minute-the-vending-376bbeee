// Entry: u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee
// "One Line, One Minute: The Vending Machine Pickup Line Contest" — make.fun
// Account: davlermid. Reward: $2 total, 10 places paid (1st $0.63).
// Deadline: 26 Nov 2026 16:35 WIB. Target: RANK 1.
//
// WINNER (51 chars, 1 line, no trailing newline):
//   Press B7 — that's me, asking you out in snack code.
//
// SCORES (1-5 per criterion, /25) — all 8 candidates, judged vs rubric:
//   K1 machine speaks to a passing human (not generic bar line)
//   K2 machine's own world (slot, button, coil, snack, hum, exact change)
//   K3 funny, punch/turn lands in the final words
//   K4 short & speakable, one breath, no dilution
//   K5 charming not creepy — cheeky, warm, makes the walker smile
//
//   #1 "Are you a snack? Because my coil keeps spinning for you."      K1 4 K2 4 K3 3 K4 5 K5 4 = 20
//   #2 "I don't have exact change, but I do have exact feelings for you." K1 4 K2 5 K3 4 K4 4 K5 4 = 21
//   #3 "You walked by, my lights lit up, and slot B4 started blushing."   K1 5 K2 5 K3 4 K4 4 K5 5 = 23
//   #4 "I've held a thousand snacks, but none ever made me hum like you." K1 5 K2 5 K3 4 K4 4 K5 5 = 23
//   #5 "Press B7 — that's me, asking you out in snack code."           K1 5 K2 5 K3 4 K4 5 K5 5 = 24  <- WINNER
//   #6 "My coil turned twice for you — that's the closest I get to a double take." K1 5 K2 5 K3 4 K4 4 K5 4 = 22
//   #7 "I'm out of change, out of snacks, but somehow full of you."    K1 4 K2 4 K3 3 K4 5 K5 3 = 19
//   #8 "Every snack in me is taken — except the one that looks like you." K1 3 K2 4 K3 2 K4 4 K5 3 = 16
//
// Top 3 after polish (#3, #4, #5) re-scored: #3 = 23, #4 = 23, #5 = 24.
// WHY #5 WINS:
// - K1: the machine itself speaks and acts — it literally invites the human
//   to press its button. No generic bar-line DNA at all.
// - K2: a real vending-machine code (B7) is the pickup mechanism; the machine
//   translates romance into its own language ("snack code").
// - K3: the turn lands in the last three words — "in snack code" reframes
//   the whole sentence as a machine's love language.
// - K4: 51 chars, one breath, zero filler; also the shortest of the top 3,
//   which wins the byte-count tie-break.
// - K5: cheeky and warm, not creepy — it asks, it doesn't grab; the walker
//   smiles and presses a button, nothing more.
// Rejected: #1 is a tired "are you a snack" cliche; #7/#8 edge toward creepy;
// #6 is good but longer and its punch ("double take") is a human idiom, not
// the machine's own world. #3 and #4 are strong runners-up but longer and
// their punch lands softer than #5's final twist.

// Deterministic: no network, no randomness, no clock — same bytes every run.
// Output: exactly one line, UTF-8, 51 chars, no trailing newline (gate: 1-200).

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Press B7 — that's me, asking you out in snack code.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
