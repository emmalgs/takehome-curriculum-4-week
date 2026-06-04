const { RateLimiter } = require('./rateLimiter');

let passed = 0;
let failed = 0;

function assert(desc, val) {
  if (val) { console.log(`  ✓ ${desc}`); passed++; }
  else { console.error(`  ✗ ${desc}`); failed++; }
}

console.log('\nRate Limiter Tests\n');

// Basic allow/deny
const rl = new RateLimiter(3, 1000);
assert('1st request allowed', rl.isAllowed('user1') === true);
assert('2nd request allowed', rl.isAllowed('user1') === true);
assert('3rd request allowed', rl.isAllowed('user1') === true);
assert('4th request denied (over limit)', rl.isAllowed('user1') === false);

// Per-user independence
assert('different user not affected', rl.isAllowed('user2') === true);
assert('different user second request', rl.isAllowed('user2') === true);

// Window expiry (short window)
const rl2 = new RateLimiter(2, 50);
rl2.isAllowed('u');
rl2.isAllowed('u');
assert('denied at limit', rl2.isAllowed('u') === false);

// Wait for window to expire
setTimeout(() => {
  assert('allowed again after window expires', rl2.isAllowed('u') === true);
  console.log(`\n${passed} passed, ${failed} failed\n`);
  if (failed > 0) process.exit(1);
}, 100);
