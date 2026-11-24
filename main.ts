// Fortune Cookie Wisdom for Developers — make.fun entry.
//
// Writes exactly one original line of fortune-cookie wisdom for a
// software developer to /output/entry.txt (or to the directory named by
// MAKEFUN_OUTPUT_DIR when run outside the grader). The text is a fixed
// string in code: no network, no randomness, no clock — the two grading
// runs therefore produce byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one short balanced sentence. An estimate is a guess about
// code that does not exist yet, so it is a prophecy about a future the
// estimator has not debugged — the fortune and the bug report are the
// same sentence read twice.
const ENTRY =
  "Every estimate you give is a fortune told about a future you have not yet debugged.";

function entryCodePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const codePoints = entryCodePointCount(ENTRY);
  if (codePoints < 1 || codePoints > 120) {
    throw new Error(`entry must be 1-120 characters, got ${codePoints}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, ENTRY, "utf8");
}

main();

// Post-write read-back verification: re-read the file just written and
// confirm it is exactly the expected line, one line, 1-120 code points.
{
  const { readFileSync } = await import("node:fs");
  const { join: joinPath } = await import("node:path");
  const verifyDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const verifyPath = joinPath(verifyDir, "entry.txt");
  const written = readFileSync(verifyPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt does not equal the expected line");
  }
  const verifyCount = entryCodePointCount(written);
  if (verifyCount < 1 || verifyCount > 120) {
    throw new Error(`read-back length out of range: ${verifyCount} code points`);
  }
  if (written.includes("\n") || written.includes("\r")) {
    throw new Error("read-back failed: entry.txt is not a single line");
  }
}
