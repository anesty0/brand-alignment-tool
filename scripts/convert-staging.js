import { readdir, stat, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const stagingDir = join(__dirname, "..", "src", "assets", "secret", "_staging");
const outputDir = join(__dirname, "..", "src", "assets", "secret");

const files = await readdir(stagingDir);
for (const file of files.filter((f) => f.endsWith(".jpg"))) {
  const src = join(stagingDir, file);
  const dest = join(outputDir, file.replace(/\.jpg$/, ".webp"));
  const before = await stat(src);
  await sharp(src)
    .resize({ width: 1920, withoutEnlargement: true })
    .webp({ quality: 78, effort: 5 })
    .toFile(dest);
  const after = await stat(dest);
  console.log(
    `${dest.split(/[\\/]/).pop().padEnd(28)} ${(before.size / 1024).toFixed(1).padStart(8)} KB -> ${(after.size / 1024).toFixed(1).padStart(7)} KB`,
  );
}

await rm(stagingDir, { recursive: true, force: true });
console.log("\nStaging directory removed.");
