const { TokenBucket } = require('./tokenBucket');
let p=0,f=0;
const ok = (d,v) => v ? (console.log(`  ✓ ${d}`),p++) : (console.error(`  ✗ ${d}`),f++);
console.log('\nToken Bucket Tests\n');
const b = new TokenBucket(10, 5);
ok('starts full', b.getTokens() === 10);
ok('consume 3 succeeds', b.consume(3) === true);
ok('tokens reduced', b.getTokens() === 7);
ok('consume 8 fails (only 7 left)', b.consume(8) === false);
ok('tokens unchanged after failed consume', b.getTokens() === 7);
ok('consume exact remaining succeeds', b.consume(7) === true);
ok('bucket empty', b.getTokens() === 0);
setTimeout(() => {
  ok('refills over time', b.getTokens() > 0);
  console.log(`\n${p} passed, ${f} failed\n`);
  if(f>0) process.exit(1);
}, 300);
