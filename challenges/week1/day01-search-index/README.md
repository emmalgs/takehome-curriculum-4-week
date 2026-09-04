# Day 01 — Search Index Class

**Time limit:** 30 minutes · **Stack:** Vanilla JS · **Difficulty:** Medium

## The challenge

Build a `SearchIndex` class. Your starting point is in `src/searchIndex.js`.

### Requirements
- Constructor accepts `string[]`
- `add(str)` — insert a new string
- `search(query)` — return matches ranked: exact (3pts) > startsWith (2pts) > includes (1pt), case-insensitive
- `remove(str)` — delete an entry
- All operations O(n) or better

### Run tests
```bash
node src/searchIndex.test.js
```

## Reflection (fill in after)
- **Date attempted:** 9/4
- **Actual time:** 40 minutes
- **Result:** 🔴 / 🟡 / 🟢 / ⭐
- **What I'd do differently:** I went for a map to do a sorted query search but I should've gone array. I also got confused on the output, I thought it was just an ordered array, but it was actually an object. So I need to double/triple check expected output. Ultimate solution is worst case O(n log n) loop: O(n), push: O(1), sort: O(k log k)
