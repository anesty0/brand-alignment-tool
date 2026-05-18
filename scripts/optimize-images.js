const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const repoRoot = path.resolve(__dirname, '..');
const assetsDir = path.join(repoRoot, 'src', 'assets');

const targets = [
  'day-6.jpg',
  'day-2.jpg',
  'parkhotel-main.png'
];

async function optimize() {
  for (const file of targets) {
    const filePath = path.join(assetsDir, file);
    if (!fs.existsSync(filePath)) {
      console.warn('Skipping missing file:', filePath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    const tmpPath = filePath + '.opt';

    try {
      if (ext === '.jpg' || ext === '.jpeg') {
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 78, mozjpeg: true })
          .toFile(tmpPath);
      } else if (ext === '.png') {
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .png({ compressionLevel: 9, quality: 80 })
          .toFile(tmpPath);
      } else {
        console.warn('Unsupported extension, skipping:', filePath);
        continue;
      }

      const origSize = fs.statSync(filePath).size;
      const newSize = fs.statSync(tmpPath).size;
      fs.renameSync(tmpPath, filePath);

      console.log(`Optimized ${file}: ${(origSize/1024).toFixed(2)} KB -> ${(newSize/1024).toFixed(2)} KB`);
    } catch (err) {
      console.error('Failed to optimize', filePath, err);
      if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
    }
  }
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
