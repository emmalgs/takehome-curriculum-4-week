# Day 07 — Fullstack: Employee Directory ⚠️ Benchmark Challenge

**Time limit:** 90 minutes · **Stack:** Django + Vue · **Difficulty:** Medium

> This is your benchmark — it mirrors your original Coderbyte challenge.
> Do it cold. Compare honestly to how that first attempt went.

## Time budget
| Phase | Target |
|-------|--------|
| Django scaffold + first endpoint | 25 min |
| Second endpoint + serializer + seed data | 20 min |
| **Switch to Vue — hard stop** | **45 min** |
| Vue scaffold + list | 20 min |
| Department filter | 15 min |
| Profile card + README | 10 min |

## Endpoints
- `GET /employees/` — list all (supports `?department=` filter)
- `GET /employees/<id>/` — single employee or 404

## Setup
```bash
# Backend (terminal 1)
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py loaddata employees/fixtures/seed.json
python manage.py runserver

# Frontend (terminal 2)
cd frontend && npm install && npm run dev
```

## Reflection (fill in after)
- **Date attempted:**
- **Backend started frontend at:** min (target: 45)
- **Result:** 🔴 / 🟡 / 🟢 / ⭐
- **Compared to original Coderbyte attempt:**
- **What I'd do differently:**
