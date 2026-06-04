import sys
sys.path.insert(0, '.')
from lru_cache import LRUCache

passed = 0
failed = 0

def check(desc, got, expected):
    global passed, failed
    if got == expected:
        print(f"  ✓ {desc}")
        passed += 1
    else:
        print(f"  ✗ {desc}  (got {got!r}, expected {expected!r})")
        failed += 1

print("\nLRU Cache Tests\n")

cache = LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
check("get existing key", cache.get(1), 1)
cache.put(3, 3)  # evicts key 2
check("evicted key returns -1", cache.get(2), -1)
check("non-evicted key survives", cache.get(3), 3)
cache.put(4, 4)  # evicts key 1 (least recently used)
check("LRU key evicted after access", cache.get(1), -1)
check("recently used key survives", cache.get(3), 3)
check("new key present", cache.get(4), 4)

# Capacity 1
c1 = LRUCache(1)
c1.put(1, 10)
check("capacity 1: get works", c1.get(1), 10)
c1.put(2, 20)
check("capacity 1: evicts only entry", c1.get(1), -1)
check("capacity 1: new entry present", c1.get(2), 20)

# Update existing key
cu = LRUCache(2)
cu.put(1, 1)
cu.put(1, 100)
check("update existing key", cu.get(1), 100)

print(f"\n{passed} passed, {failed} failed\n")
if failed > 0:
    sys.exit(1)
