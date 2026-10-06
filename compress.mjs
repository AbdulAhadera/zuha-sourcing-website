import sharp from "sharp";
import fs from "fs";
import path from "path";

const MAX_WIDTH = 1000;
const root = "public";

const folders = fs
  .readdirSync(root)
  .filter((f) => f.startsWith("denim-") || f === "service")
  .map((f) => path.join(root, f));

let before = 0;
let after = 0;

for (const folder of folders) {
  for (const file of fs.readdirSync(folder)) {
    const ext = path.extname(file).toLowerCase();
    if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) continue;

    const full = path.join(folder, file);
    const input = fs.readFileSync(full);

    let img = sharp(input).rotate().resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });

    if (ext === ".png") img = img.png({ quality: 80, compressionLevel: 9, palette: true });
    else if (ext === ".webp") img = img.webp({ quality: 78 });
    else img = img.jpeg({ quality: 78, mozjpeg: true });

    const output = await img.toBuffer();
    before += input.length;

    if (output.length < input.length) {
      fs.writeFileSync(full, output);
      after += output.length;
    } else {
      after += input.length;
    }
    console.log(`${full}: ${(input.length / 1024).toFixed(0)}KB -> ${(Math.min(output.length, input.length) / 1024).toFixed(0)}KB`);
  }
}

console.log(`\nTotal: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB`);