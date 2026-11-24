import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
const line = "I joined a gym in January to get in shape, and by March the only thing still running was my monthly payment.";
const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line + "\n", "utf8");
console.log(`wrote ${line.length} chars to ${out}`);
