# Day 03 — Todos REST API (Django)

**Time limit:** 45 minutes · **Stack:** Django + DRF · **Difficulty:** Easy

## The challenge

Two GET endpoints. The scaffold is already wired — fill in the model, serializer, and views.

### Endpoints to build
- `GET /todos/` — list all todos
- `GET /todos/<id>/` — single todo or 404

### Setup
```bash
pip install django djangorestframework
python manage.py migrate
python manage.py loaddata todos/fixtures/seed.json
python manage.py runserver
```

### Test
```bash
curl http://localhost:8000/todos/
curl http://localhost:8000/todos/1/
curl http://localhost:8000/todos/999/   # should 404
```

## Reflection (fill in after)
- **Date attempted:**
- **Actual time:**
- **Time from `migrate` to first working endpoint:**
- **Result:** 🔴 / 🟡 / 🟢 / ⭐
- **What I'd do differently:**
