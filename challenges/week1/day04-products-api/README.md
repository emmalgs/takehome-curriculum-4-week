# Day 04 — Products REST API (Express)

**Time limit:** 45 minutes · **Stack:** Express.js · **Difficulty:** Easy

## The challenge

Two GET endpoints with optional query filtering. Fill in `src/routes/products.js` and the data in `src/data.js`.

### Endpoints to build
- `GET /products` — list all products (supports `?category=` filter)
- `GET /products/:id` — single product or 404

### Setup
```bash
npm install
npm start
```

### Test
```bash
curl http://localhost:3000/products
curl "http://localhost:3000/products?category=electronics"
curl http://localhost:3000/products/1
curl http://localhost:3000/products/999   # should 404
```

## Reflection (fill in after)
- **Date attempted:**
- **Actual time:**
- **Result:** 🔴 / 🟡 / 🟢 / ⭐
- **What I'd do differently:**
