// The Funniest Honest Appliance Error — one-line entry.
// Node 22, stdlib only, deterministic, no network.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUT_PATH = join(OUT_DIR, "entry.txt");

// Microwave, in its own flat, put-upon voice: the honest fault is uneven
// heating — standing waves leave food hot at the edges and cold in the
// middle. The machine did its part; the twist lands on the last words,
// "Physics did the rest", with nothing explained.
const LINE =
  "Beep. Your food is hot on the edges and cold in the middle. I did my part. Physics did the rest.";

// Gate guard: the sealed scorer accepts 1-200 UTF-8 chars, not only whitespace.
// Count the code points once, then reuse the count in the guard.
const len = [...LINE].length;
if (
  len < 1 ||
  len > 200 ||
  !LINE.trim() ||
  LINE.includes("\n")
) {
  throw new Error("entry line violates the 1-200 char single-line gate");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
