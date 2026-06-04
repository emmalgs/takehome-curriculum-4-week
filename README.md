# Take-Home Challenge Curriculum

> 20 daily mock challenges · 4 weeks · practice for real technical take-homes

A structured curriculum for practising timed technical challenges (30 min–2 hours). Each challenge has scaffolded starter code so you can open it in VS Code and start coding immediately — just like a real take-home.

## How to use this repo

### Fork it
1. Click **Fork** on GitHub
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/takehome-curriculum`
3. Open a challenge folder in VS Code and start the timer

### Opening a challenge
Each challenge has a `.vscode/` config. Open the challenge folder directly:
```bash
code challenges/week1/day01-search-index
```
Or use the workspace file to see all challenges:
```bash
code takehome-curriculum.code-workspace
```

### Tracking progress
The `PROGRESS.md` file in the root is your personal tracker. Fill it in as you go.

### Study group
- Each person forks the repo independently
- Complete challenges in your own fork (commit your solutions to a `solutions/` branch)
- Share your fork URL with your group for peer review

---

## Curriculum overview

| Day | Challenge | Stack | Time | Week |
|-----|-----------|-------|------|------|
| 01 | Search index class | Vanilla JS | 30 min | 1 |
| 02 | LRU cache | Python | 45 min | 1 |
| 03 | Todos REST API | Django + DRF | 45 min | 1 |
| 04 | Products REST API | Express.js | 45 min | 1 |
| 05 | Rate limiter class | Vanilla JS | 30 min | 1 |
| 06 | Movie search app | FastAPI + React | 90 min | 2 |
| 07 | Employee directory | Django + Vue | 90 min | 2 |
| 08 | Bookmarks manager | Express + React | 2 hr | 2 |
| 09 | Weather dashboard | FastAPI + Vue | 90 min | 2 |
| 10 | Algorithm sprint: arrays + strings | Any | 45 min | 2 |
| 11 | Speed run: token bucket | Vanilla JS | 30 min | 3 |
| 12 | Speed run: URL shortener | Express.js | 30 min | 3 |
| 13 | Timed fullstack: note taker | Django + React | 60 min | 3 |
| 14 | Peer review day | — | 60 min | 3 |
| 15 | Algorithm sprint: trees + graphs | Any | 45 min | 3 |
| 16 | Simulation: inventory system | FastAPI + Vue | 2 hr | 4 |
| 17 | Simulation: job board | Django + React | 2 hr | 4 |
| 18 | Speed pair: same prompt, 3 stacks | All three | 90 min | 4 |
| 19 | Refactor day | Any | 60 min | 4 |
| 20 | Group retrospective | — | 60 min | 4 |

---

## The core rule

> At the 50% time mark, stop backend work and switch to frontend — no exceptions.
> A working ugly frontend beats a perfect backend with no UI every single time.

---

## Solutions branch

Keep your scaffold on `main`. Work in a `solutions` branch:
```bash
git checkout -b solutions
# do your work
git add challenges/week1/day01-search-index/
git commit -m "day01: search index complete"
git push origin solutions
```
Share your `solutions` branch URL with your study group for review.
