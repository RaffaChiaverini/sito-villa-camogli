import { expect, test } from '@playwright/test';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const repositoryRoot = resolve(process.cwd());
const candidateRoots = ['src/content', 'src/data', 'src/assets'];
const searchableExtensions = new Set(['.json', '.js', '.jsx', '.mjs', '.ts', '.tsx', '.astro']);
const prototypeMarker = /prototypeOnly\s*[:=]\s*true|["']prototypeOnly["']\s*:\s*true/;

function sourceFiles(directory: string): string[] {
  try {
    return readdirSync(directory).flatMap((entry) => {
      const path = join(directory, entry);
      return statSync(path).isDirectory() ? sourceFiles(path) : searchableExtensions.has(extname(path)) ? [path] : [];
    });
  } catch {
    return [];
  }
}

test('publication builds contain no prototype-only media', () => {
  test.skip(
    process.env.PUBLICATION_BUILD !== 'true',
    'Set PUBLICATION_BUILD=true in the GitHub Pages pipeline to activate the publication gate',
  );

  const offenders = candidateRoots
    .flatMap((directory) => sourceFiles(join(repositoryRoot, directory)))
    .filter((file) => prototypeMarker.test(readFileSync(file, 'utf8')))
    .map((file) => relative(repositoryRoot, file));

  expect(
    offenders,
    `Owner-cleared media must replace prototype assets before publishing: ${offenders.join(', ')}`,
  ).toEqual([]);
});
