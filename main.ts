// Entry writer for the one-line laugh bounty.
// The joke lives in one place below; the rest is just plumbing to save it.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// Setup lands in January, twist lands on the monthly payment.
const jokeLine =
  "I joined a gym in January to get in shape, and by March the only thing still running was my monthly payment.";

function ensureParentFolder(filePath: string): void {
  mkdirSync(dirname(filePath), { recursive: true });
}
function main(): void {
  ensureParentFolder(OUTPUT_PATH);
  // Single line on disk, always terminated with a newline.
  writeFileSync(OUTPUT_PATH, `${jokeLine}\n`, "utf8");
  console.log(`wrote ${jokeLine.length} chars to ${OUTPUT_PATH}`);
}

main();
