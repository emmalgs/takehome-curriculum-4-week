# Day 05 — Rate Limiter Class

**Time limit:** 30 minutes · **Stack:** Vanilla JS · **Difficulty:** Medium

## The challenge

Build a `RateLimiter` class using a **sliding window** algorithm in `src/rateLimiter.js`.

### Requirements
- `constructor(maxRequests, windowMs)`
- `isAllowed(userId)` — returns `true` if within limit, `false` if over
- Per-user tracking; different users independent
- Sliding window (not fixed window)
- Memory cleanup: don't leak old timestamps

### Run tests
```bash
node src/rateLimiter.test.js
```

## Reflection (fill in after)
- **Date attempted:**
- **Actual time:**
- **Result:** 🔴 / 🟡 / 🟢 / ⭐
- **What I'd do differently:**
