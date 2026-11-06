import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = path.join(root, 'artifacts/cognimate-study-planner/dist/public');
const htmlPath = path.join(outputDir, 'index.html');
let html = await readFile(htmlPath, 'utf8');

function assetPath(url) {
  const pathname = new URL(url, 'https://standalone.invalid').pathname;
  const resolved = path.resolve(outputDir, `.${pathname}`);
  if (!resolved.startsWith(`${outputDir}${path.sep}`)) {
    throw new Error(`Build asset is outside the output directory: ${url}`);
  }
  return resolved;
}

const scripts = [...html.matchAll(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/g)];
const stylesheetLinks = [...html.matchAll(/<link\b[^>]*rel="stylesheet"[^>]*>/g)];
const stylesheets = stylesheetLinks.filter(([tag]) => !/fonts\.googleapis\.com/i.test(tag));
if (scripts.length !== 1 || stylesheets.length !== 1) {
  throw new Error(`Expected one JavaScript bundle and one stylesheet; found ${scripts.length} and ${stylesheets.length}.`);
}

const scriptUrl = scripts[0][1];
const stylesheetUrl = stylesheets[0][0].match(/\bhref="([^"]+)"/)?.[1];
if (!stylesheetUrl) throw new Error('The production stylesheet link has no href.');

const [javascript, stylesheet] = await Promise.all([
  readFile(assetPath(scriptUrl), 'utf8'),
  readFile(assetPath(stylesheetUrl), 'utf8'),
]);
const inlineStylesheet = stylesheet.replace(/@import\s*["']https:\/\/fonts\.googleapis\.com[^"']*["'];?/gi, '');
const inlineScript = javascript.replace(/<\/script/gi, '<\\/script');

html = html.replace(scripts[0][0], `<script type="module">${inlineScript}</script>`);
html = html.replace(stylesheets[0][0], `<style>${inlineStylesheet}</style>`);
for (const [tag] of stylesheetLinks.filter(([tag]) => /fonts\.googleapis\.com/i.test(tag))) html = html.replace(tag, '');
html = html.replace(/<link\b[^>]*href="https:\/\/fonts\.(?:googleapis|gstatic)\.com[^"]*"[^>]*>\s*/gi, '');

const faviconPath = path.join(outputDir, 'favicon.svg');
try {
  const favicon = await readFile(faviconPath, 'utf8');
  html = html.replace(/<link\b[^>]*href="\/favicon\.svg"[^>]*>/i, `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,${encodeURIComponent(favicon)}" />`);
} catch {
  html = html.replace(/<link\b[^>]*href="\/favicon\.svg"[^>]*>\s*/i, '');
}

if (html.includes(scriptUrl) || html.includes(stylesheetUrl) || /@import\s*["']https:\/\/fonts\.googleapis\.com/i.test(html)) {
  throw new Error(`The standalone HTML still contains an asset reference: script=${html.includes(scriptUrl)}, stylesheet=${html.includes(stylesheetUrl)}, font=${/@import\s*["']https:\/\/fonts\.googleapis\.com/i.test(html)}.`);
}

await writeFile(path.join(root, 'index.html'), html);
console.log(`Created ${path.join(root, 'index.html')} (${Buffer.byteLength(html)} bytes)`);