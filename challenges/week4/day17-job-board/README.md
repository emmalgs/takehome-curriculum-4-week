# Day 17 — Full Simulation: Job Board ⏱️ 2 hours

**No AI assistance. Build order: list → detail modal → filter tabs.**

## Endpoints
- `GET /jobs/` — list (supports `?type=` filter: full-time/part-time/contract)
- `GET /jobs/<id>/` — detail

## Setup
```bash
cd backend && pip install -r requirements.txt && python manage.py migrate && python manage.py loaddata jobs/fixtures/seed.json && python manage.py runserver
cd frontend && npm install && npm run dev
```

## Reflection
- **Result:** 🔴/🟡/🟢/⭐  · **What I cut:**  · **Compared to Day 7:**
