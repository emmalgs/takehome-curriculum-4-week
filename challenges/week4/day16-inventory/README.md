# Day 16 — Full Simulation: Inventory System ⏱️ 2 hours

**No AI code assistance. No extensions. Set a visible countdown timer.**

## Endpoints
- `GET /items` — list (supports `?category=` filter)
- `GET /items/{id}` — detail
- `POST /items` — create new item

## Frontend
- Filterable table · Add-item form · Detail sidebar on row click

## Simulation milestones
| Target | Milestone |
|--------|-----------|
| 25 min | First endpoint working |
| 50 min | All endpoints + seed data |
| 50 min | **Start frontend** |
| 100 min | Frontend wired to API |
| 110 min | README written |
| 120 min | Final cleanup |

## Setup
```bash
cd backend && pip install -r requirements.txt && uvicorn main:app --reload
cd frontend && npm install && npm run dev
```

## Reflection
- **Result:** 🔴/🟡/🟢/⭐  · **What I cut:**
