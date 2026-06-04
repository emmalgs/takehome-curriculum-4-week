# Forking this repo

## For study group members

1. Click **Fork** at the top-right of the GitHub page
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/takehome-curriculum
   cd takehome-curriculum
   ```
3. Create a solutions branch:
   ```bash
   git checkout -b solutions
   ```
4. Work on each challenge, commit when done:
   ```bash
   git add challenges/week1/day01-search-index/
   git commit -m "day01: complete"
   git push origin solutions
   ```
5. Share your fork's `solutions` branch URL with the group for peer review

## Opening in VS Code
```bash
# Open a single challenge (recommended — isolated timer run)
code challenges/week1/day01-search-index

# Or open everything at once with the workspace file
code takehome-curriculum.code-workspace
```

## Syncing updates from the original repo
```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/takehome-curriculum
git fetch upstream
git merge upstream/main
```
