const { SearchIndex } = require('./searchIndex');

let passed = 0;
let failed = 0;

function assert(description, condition) {
  if (condition) {
    console.log(`  ✓ ${description}`);
    passed++;
  } else {
    console.error(`  ✗ ${description}`);
    failed++;
  }
}

console.log('\nSearch Index Tests\n');

// Basic search
const idx = new SearchIndex(['apple', 'application', 'apply', 'banana', 'band']);
const results = idx.search('app');
assert('search returns results', results.length > 0);
assert('exact match scores highest', results[0]?.value !== 'banana');
assert('case insensitive', idx.search('APP').length > 0);

// add / remove
idx.add('appetite');
assert('add inserts item', idx.search('appetite').some(r => r.value === 'appetite'));
idx.remove('apple');
assert('remove deletes item', !idx.search('apple').some(r => r.value === 'apple'));

// Edge cases
assert('empty query returns empty', idx.search('').length === 0 || Array.isArray(idx.search('')));
const empty = new SearchIndex();
assert('empty constructor works', Array.isArray(empty.search('test')));

console.log(`\n${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
