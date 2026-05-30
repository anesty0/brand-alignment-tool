import { mkdir, stat } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const sourceDir = "C:/Users/anest/OneDrive/Documents/Downloads";
const outputDir = join(__dirname, "..", "src", "assets", "secret");

const MAX_WIDTH = 1920;
const QUALITY = 78;

const mappings = [
  { from: "студио дизайн1.jpg", to: "studio-design-1.webp" },
  { from: "студио дизайн1 (1).jpg", to: "studio-design-2.webp" },
  { from: "сьют альпин.jpg", to: "suite-alpine-1.webp" },
  { from: "сьют альпин1.jpg", to: "suite-alpine-2.webp" },
  { from: "комфорт сьют дизайн1.jpg", to: "comfort-design-1.webp" },
  { from: "комфорт сьют дизайн2.jpg", to: "comfort-design-2.webp" },
  { from: "комфорт сьют альпин1.jpg", to: "comfort-alpine-1.webp" },
  { from: "комфорто сьют альпин1.jpg", to: "comfort-alpine-2.webp" },
  { from: "супериор сьют альпин.jpg", to: "superior-alpine-1.webp" },
  { from: "супериор фэмили сьют.jpg", to: "superior-family-1.webp" },
  { from: "супериор фэмили сьют1.jpg", to: "superior-family-2.webp" },
  { from: "делюкс сьют альпин1.jpg", to: "deluxe-alpine-1.webp" },
  { from: "делюкс сьют альпин2.jpg", to: "deluxe-alpine-2.webp" },
  { from: "делюкс фэмили сьют1.jpg", to: "deluxe-family-1.webp" },
  { from: "делюкс фэмили сьют2.jpg", to: "deluxe-family-2.webp" },
  { from: "премиум сьют.jpg", to: "premium-1.webp" },
  { from: "премиум сьют1.jpg", to: "premium-2.webp" },
];

await mkdir(outputDir, { recursive: true });

let totalBefore = 0;
let totalAfter = 0;

for (const { from, to } of mappings) {
  const src = join(sourceDir, from);
  const dest = join(outputDir, to);
  try {
    const before = await stat(src);
    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(dest);
    const after = await stat(dest);
    totalBefore += before.size;
    totalAfter += after.size;
    console.log(
      `${to.padEnd(28)} ${(before.size / 1024).toFixed(1).padStart(8)} KB -> ${(after.size / 1024).toFixed(1).padStart(7)} KB`,
    );
  } catch (e) {
    console.error(`FAIL ${from}:`, e.message);
  }
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB`,
);
