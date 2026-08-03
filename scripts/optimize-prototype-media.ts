import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";
import sharp from "sharp";

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? walk(path) : Promise.resolve([path]);
    }),
  );
  return nested.flat();
}

const originals = (await walk("public/media/prototype")).filter(
  (path) => extname(path).toLowerCase() === ".jpg",
);

for (const original of originals) {
  const stem = original.replace(/\.jpg$/i, "");
  await Promise.all([
    sharp(original).avif({ quality: 50, effort: 6 }).toFile(`${stem}.avif`),
    sharp(original).webp({ quality: 72, effort: 5, smartSubsample: true }).toFile(`${stem}.webp`),
    ...[640, 960].flatMap((width) => [
      sharp(original)
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 50, effort: 6 })
        .toFile(`${stem}-${width}.avif`),
      sharp(original)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 72, effort: 5, smartSubsample: true })
        .toFile(`${stem}-${width}.webp`),
    ]),
  ]);
}

console.log(`Optimized ${originals.length} prototype photographs to AVIF and WebP.`);
