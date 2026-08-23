#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const brandRoot = join(root, 'design-systems/celebration-onpoint');
const fixtureHtml = readFileSync(join(brandRoot, 'components.html'), 'utf8');
const tokensCss = readFileSync(join(brandRoot, 'tokens.css'), 'utf8');

const COMPONENT_GROUPS = [
  { id: 'buttons', label: 'Buttons and calls to action', selectorMatchers: [/\bbutton\b/i, /\.btn(?:\b|[-_:])/i, /\[type=["']?(?:button|submit|reset)/i], classMatchers: [/^btn(?:$|-)/i, /button/i, /cta/i], elementMatchers: [/^button$/i] },
  { id: 'inputs', label: 'Form fields and controls', selectorMatchers: [/\binput\b/i, /\btextarea\b/i, /\bselect\b/i, /\.field(?:\b|[-_:])/i, /\blabel\b/i], classMatchers: [/^field(?:$|-)/i, /input/i, /control/i, /form/i], elementMatchers: [/^(input|textarea|select|label|form)$/i] },
  { id: 'cards', label: 'Cards and panels', selectorMatchers: [/\.card(?:\b|[-_:])/i, /\.panel(?:\b|[-_:])/i, /\.tile(?:\b|[-_:])/i], classMatchers: [/^card(?:$|-)/i, /^panel(?:$|-)/i, /^tile(?:$|-)/i], elementMatchers: [] },
  { id: 'badges', label: 'Badges, chips, and status labels', selectorMatchers: [/\.badge(?:\b|[-_:])/i, /\.chip(?:\b|[-_:])/i, /\.tag(?:\b|[-_:])/i, /\.pill(?:\b|[-_:])/i], classMatchers: [/^badge(?:$|-)/i, /^chip(?:$|-)/i, /^tag(?:$|-)/i, /^pill(?:$|-)/i, /status/i], elementMatchers: [] },
  { id: 'links', label: 'Links and inline actions', selectorMatchers: [/\ba\b/i, /\.link(?:\b|[-_:])/i], classMatchers: [/^link(?:$|-)/i], elementMatchers: [/^a$/i] },
  { id: 'keyboard', label: 'Keyboard hints', selectorMatchers: [/\bkbd\b/i, /\.kbd(?:\b|[-_:])/i], classMatchers: [/^kbd(?:$|-)/i, /keyboard/i, /shortcut/i], elementMatchers: [/^kbd$/i] },
  { id: 'icons', label: 'Icon slots', selectorMatchers: [/\.icon(?:\b|[-_:])/i, /\[aria-hidden=["']true["']\]/i], classMatchers: [/^icon(?:$|-)/i], elementMatchers: [/^svg$/i] },
  { id: 'typography', label: 'Typography scale and text utilities', selectorMatchers: [/\bh[1-6]\b/i, /\.lead(?:\b|[-_:])/i, /\.eyebrow(?:\b|[-_:])/i, /\.body-(?:muted|sm|small)\b/i], classMatchers: [/^lead$/i, /^eyebrow$/i, /^body-(?:muted|sm|small)$/i, /caption/i], elementMatchers: [/^h[1-6]$/i, /^p$/i] },
  { id: 'layout', label: 'Layout primitives', selectorMatchers: [/\.container(?:\b|[-_:])/i, /\.stack-\d+\b/i, /\.row-(?:between|center|start|end)\b/i, /\bsection\b/i, /\bmain\b/i, /\bnav\b/i], classMatchers: [/^container$/i, /^stack-\d+$/i, /^row-(?:between|center|start|end)$/i, /grid/i, /layout/i], elementMatchers: [/^(main|section|nav|header|footer)$/i] },
];

const LAYERS = {
  '--bg': 'A1-identity', '--surface': 'A1-identity', '--surface-warm': 'B-slot',
  '--fg': 'A1-identity', '--fg-2': 'B-slot', '--muted': 'A1-identity', '--meta': 'B-slot',
  '--border': 'A1-identity', '--border-soft': 'B-slot',
  '--accent': 'A1-identity', '--accent-on': 'A2', '--accent-hover': 'A2', '--accent-active': 'A2',
  '--success': 'A2', '--warn': 'A2', '--danger': 'A2',
  '--font-display': 'A1-identity', '--font-body': 'A1-identity', '--font-mono': 'A2',
  '--text-xs': 'A1-structure', '--text-sm': 'A1-structure', '--text-base': 'A1-structure',
  '--text-lg': 'A1-structure', '--text-xl': 'A1-structure', '--text-2xl': 'A1-structure',
  '--text-3xl': 'A1-structure', '--text-4xl': 'A1-structure',
  '--leading-body': 'A1-structure', '--leading-tight': 'A1-structure', '--tracking-display': 'A1-structure',
  '--space-1': 'A2', '--space-2': 'A2', '--space-3': 'A2', '--space-4': 'A2',
  '--space-5': 'A2', '--space-6': 'A2', '--space-8': 'A2', '--space-12': 'A2',
  '--section-y-desktop': 'A1-structure', '--section-y-tablet': 'A1-structure', '--section-y-phone': 'A1-structure',
  '--radius-sm': 'A2', '--radius-md': 'A2', '--radius-lg': 'A2', '--radius-pill': 'A2',
  '--elev-flat': 'A2', '--elev-ring': 'A2', '--elev-raised': 'A2',
  '--focus-ring': 'A2', '--motion-fast': 'A2', '--motion-base': 'A2', '--ease-standard': 'A2',
  '--container-max': 'A1-structure', '--container-gutter-desktop': 'A1-structure',
  '--container-gutter-tablet': 'A1-structure', '--container-gutter-phone': 'A1-structure',
};

function stripCssComments(css) { return css.replace(/\/\*[\s\S]*?\*\//g, ''); }
function stripContainerAtRuleHeaders(css) { return css.replace(/@(media|supports|container|layer)\b[^{]*\{/gi, '{'); }
function stripRootBlocks(css) { return css.replace(/:root(?:\[[^\]]+\])?\s*\{[\s\S]*?\}/g, ''); }
function normalizeSelector(selector) { return selector.trim().replace(/\s+/g, ' '); }
function uniqueSorted(values) { return [...new Set(values)].sort((a, b) => a.localeCompare(b)); }
function countMatches(source, pattern) { return [...source.matchAll(pattern)].length; }
function optionalText(key, value) { return value === undefined ? {} : { [key]: value }; }
function decodeBasicEntities(value) {
  return value.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

function splitSelectorList(selectorList) {
  const selectors = [];
  let depth = 0;
  let start = 0;
  for (let index = 0; index < selectorList.length; index += 1) {
    const char = selectorList[index];
    if (char === '(' || char === '[') { depth += 1; continue; }
    if (char === ')' || char === ']') { depth = Math.max(0, depth - 1); continue; }
    if (char === ',' && depth === 0) { selectors.push(selectorList.slice(start, index)); start = index + 1; }
  }
  selectors.push(selectorList.slice(start));
  return selectors;
}

function extractStyleBlocks(html) {
  const blocks = [];
  const stylePattern = /<style\b[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  while ((match = stylePattern.exec(html)) !== null) blocks.push((match[1] ?? '').trim());
  return blocks;
}

function extractCssSelectors(css) {
  const selectors = new Set();
  const commentlessCss = stripContainerAtRuleHeaders(stripCssComments(css));
  const selectorPattern = /(?:^|[{}])\s*([^@{}][^{}]*?)\s*\{/g;
  let match;
  while ((match = selectorPattern.exec(commentlessCss)) !== null) {
    const rawSelectorList = match[1]?.trim();
    if (!rawSelectorList) continue;
    if (rawSelectorList.includes(':root')) continue;
    if (/^(?:from|to|\d+(?:\.\d+)?%)$/i.test(rawSelectorList)) continue;
    for (const selector of splitSelectorList(rawSelectorList)) {
      const normalized = normalizeSelector(selector);
      if (normalized.length > 0 && !normalized.startsWith('@')) selectors.add(normalized);
    }
  }
  return [...selectors].sort((a, b) => a.localeCompare(b));
}

function extractTokenReferences(source) {
  const tokens = new Set();
  const tokenPattern = /var\(\s*(--[a-zA-Z0-9_-]+)/g;
  let match;
  while ((match = tokenPattern.exec(source)) !== null) if (match[1]) tokens.add(match[1]);
  return [...tokens].sort((a, b) => a.localeCompare(b));
}

function extractSelectorTokenReferences(css) {
  const referencesBySelector = new Map();
  const commentlessCss = stripContainerAtRuleHeaders(stripCssComments(css));
  const rulePattern = /(?:^|[{}])\s*([^@{}][^{}]*?)\s*\{([^{}]*)\}/g;
  let match;
  while ((match = rulePattern.exec(commentlessCss)) !== null) {
    const rawSelectorList = match[1]?.trim();
    const rawBody = match[2] ?? '';
    if (!rawSelectorList || rawSelectorList.includes(':root') || /^(?:from|to|\d+(?:\.\d+)?%)$/i.test(rawSelectorList)) continue;
    const tokenReferences = extractTokenReferences(rawBody);
    if (tokenReferences.length === 0) continue;
    for (const selector of splitSelectorList(rawSelectorList)) {
      const normalized = normalizeSelector(selector);
      if (!normalized || normalized.startsWith('@')) continue;
      const selectorReferences = referencesBySelector.get(normalized) ?? new Set();
      for (const token of tokenReferences) selectorReferences.add(token);
      referencesBySelector.set(normalized, selectorReferences);
    }
  }
  return new Map([...referencesBySelector.entries()].map(([selector, references]) => [selector, [...references].sort((a, b) => a.localeCompare(b))]).sort(([left], [right]) => left.localeCompare(right)));
}

function extractHtmlClasses(html) {
  const classes = new Set();
  const classPattern = /\bclass\s*=\s*(["'])(.*?)\1/gis;
  let match;
  while ((match = classPattern.exec(html)) !== null) {
    for (const className of (match[2] ?? '').split(/\s+/)) if (className) classes.add(className);
  }
  return [...classes].sort((a, b) => a.localeCompare(b));
}

function extractHtmlElements(html) {
  const elements = new Set();
  const elementPattern = /<\s*([a-z][a-z0-9-]*)\b/gi;
  let match;
  while ((match = elementPattern.exec(html)) !== null) {
    const element = match[1]?.toLowerCase();
    if (element && !element.startsWith('!')) elements.add(element);
  }
  return [...elements].sort((a, b) => a.localeCompare(b));
}

function parseTokenNames(css) {
  const tokens = new Set();
  const tokenPattern = /(--[a-zA-Z0-9_-]+)\s*:/g;
  let match;
  while ((match = tokenPattern.exec(stripCssComments(css))) !== null) if (match[1]) tokens.add(match[1]);
  return [...tokens].sort((a, b) => a.localeCompare(b));
}

function extractTitle(html) {
  const value = /<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1]?.trim().replace(/\s+/g, ' ');
  return value ? decodeBasicEntities(value) : undefined;
}

function extractMetaDescription(html) {
  const match = /<meta\b(?=[^>]*\bname\s*=\s*["']description["'])(?=[^>]*\bcontent\s*=\s*(["'])([\s\S]*?)\1)[^>]*>/i.exec(html);
  const value = match?.[2]?.trim().replace(/\s+/g, ' ');
  return value ? decodeBasicEntities(value) : undefined;
}

function extractComponentsManifest({ brandId, fixtureHtml, tokensCss }) {
  const styleBlocks = extractStyleBlocks(fixtureHtml);
  const css = styleBlocks.join('\n\n');
  const selectors = extractCssSelectors(css);
  const selectorTokenReferences = extractSelectorTokenReferences(css);
  const classes = extractHtmlClasses(fixtureHtml);
  const elements = extractHtmlElements(fixtureHtml);
  const declaredTokens = parseTokenNames(tokensCss);
  const referencedTokens = extractTokenReferences(fixtureHtml);

  return {
    schemaVersion: 1,
    brandId,
    source: { componentsHtml: 'components.html', tokensCss: 'tokens.css' },
    fixture: {
      ...optionalText('title', extractTitle(fixtureHtml)),
      ...optionalText('description', extractMetaDescription(fixtureHtml)),
      styleBlockCount: styleBlocks.length,
      selectorCount: selectors.length,
      classCount: classes.length,
      elementCount: elements.length,
    },
    tokens: {
      declared: declaredTokens,
      referenced: referencedTokens,
      unusedDeclared: declaredTokens.filter((token) => !referencedTokens.includes(token)),
      undeclaredReferenced: referencedTokens.filter((token) => !declaredTokens.includes(token)),
    },
    selectors,
    classes,
    elements,
    groups: COMPONENT_GROUPS.map((definition) => {
      const groupSelectors = selectors.filter((selector) => definition.selectorMatchers.some((matcher) => matcher.test(selector)));
      const groupClasses = classes.filter((className) => definition.classMatchers.some((matcher) => matcher.test(className)));
      const groupElements = elements.filter((element) => definition.elementMatchers.some((matcher) => matcher.test(element)));
      const tokenReferences = uniqueSorted(groupSelectors.flatMap((selector) => selectorTokenReferences.get(selector) ?? [])).filter((token) => referencedTokens.includes(token));
      return { id: definition.id, label: definition.label, present: groupSelectors.length > 0 || groupClasses.length > 0 || groupElements.length > 0, selectors: groupSelectors, classes: groupClasses, elements: groupElements, tokenReferences };
    }),
    literals: (() => {
      const cssWithoutRoot = stripRootBlocks(stripCssComments(css));
      return {
        colorExpressions: countMatches(cssWithoutRoot, /(?:#[0-9a-f]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)|oklch\([^)]*\)|color-mix\([^)]*\))/gi),
        pixelValues: countMatches(cssWithoutRoot, /(?<![\w-])-?\d*\.?\d+px\b/g),
        hardcodedFontFamilies: countMatches(cssWithoutRoot, /\bfont-family\s*:\s*(?!var\()/gi),
      };
    })(),
  };
}

function generateTokensSource(css) {
  const lines = css.split('\n');
  const tokens = [];
  const seen = new Set();
  lines.forEach((line, index) => {
    const match = line.match(/(--[a-zA-Z0-9_-]+)\s*:\s*(.+?);/);
    if (!match || seen.has(match[1])) return;
    seen.add(match[1]);
    tokens.push({
      name: match[1],
      value: match[2].trim(),
      layer: LAYERS[match[1]] ?? 'C-extension',
      source: `tokens.css:${index + 1}`,
    });
  });
  return {
    schemaVersion: 1,
    sourceScope: 'github-hybrid-import',
    brandId: 'celebration-onpoint',
    files: ['DESIGN.md', 'tokens.css', 'components.html'],
    generatedAt: '2026-08-23T00:00:00.000Z',
    tokens,
  };
}

const manifest = extractComponentsManifest({ brandId: 'celebration-onpoint', fixtureHtml, tokensCss });
writeFileSync(join(brandRoot, 'components.manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
writeFileSync(join(brandRoot, 'source/tokens.source.json'), `${JSON.stringify(generateTokensSource(tokensCss), null, 2)}\n`);

if (manifest.tokens.undeclaredReferenced.length > 0) {
  console.error('Undeclared token references:', manifest.tokens.undeclaredReferenced.join(', '));
  process.exit(1);
}

console.log(`Wrote components.manifest.json (${manifest.fixture.selectorCount} selectors, ${manifest.tokens.referenced.length} referenced tokens)`);
console.log(`Wrote source/tokens.source.json (${generateTokensSource(tokensCss).tokens.length} tokens)`);
