class SearchIndex {
  constructor(items = []) {
    this.items = items
  }

  add(str) {
    this.items.push(str)
  }

  remove(str) {
    this.items = this.items.filter((word) => word !== str)
  }

  search(query) {
    const scoredQuery = []
    for (const item of this.items) {
      if (item.toLowerCase().includes(query.toLowerCase())) {
        const score = item.toLowerCase() === query.toLowerCase() ? 2 : 1
        scoredQuery.push({
          value: item,
          score
        })
      }
    }

    return scoredQuery.sort((a, b) => b.score - a.score)
  }
}

module.exports = { SearchIndex };
