import { readdir, stat, unlink } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const assetsDir = join(__dirname, "..", "src", "assets");

const MAX_WIDTH = 1920;
const QUALITY = 78;

async function convert() {
  const files = await readdir(assetsDir);
  const targets = files.filter((f) =>
    [".jpg", ".jpeg", ".png"].includes(extname(f).toLowerCase()),
  );

  if (targets.length === 0) {
    console.log("No .jpg/.jpeg/.png files to convert.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of targets) {
    const src = join(assetsDir, file);
    const dest = join(assetsDir, `${basename(file, extname(file))}.webp`);

    try {
      const beforeStat = await stat(src);
      await sharp(src)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(dest);
      const afterStat = await stat(dest);

      totalBefore += beforeStat.size;
      totalAfter += afterStat.size;

      const beforeKB = (beforeStat.size / 1024).toFixed(1);
      const afterKB = (afterStat.size / 1024).toFixed(1);
      const reduction = (
        (1 - afterStat.size / beforeStat.size) * 100
      ).toFixed(1);
      console.log(
        `${file.padEnd(35)} ${beforeKB.padStart(8)} KB -> ${afterKB.padStart(8)} KB  (-${reduction}%)`,
      );

      await unlink(src);
    } catch (err) {
      console.error(`Failed: ${file}`, err.message);
    }
  }

  const beforeMB = (totalBefore / 1024 / 1024).toFixed(2);
  const afterMB = (totalAfter / 1024 / 1024).toFixed(2);
  const totalReduction = (
    (1 - totalAfter / totalBefore) * 100
  ).toFixed(1);
  console.log(
    `\nTotal: ${beforeMB} MB -> ${afterMB} MB  (-${totalReduction}%)`,
  );
}

convert().catch((e) => {
  console.error(e);
  process.exit(1);
});
