class SearchIndex {
  constructor(items = []) {
    // TODO: store items
  }

  add(str) {
    // TODO
  }

  remove(str) {
    // TODO
  }

  search(query) {
    // TODO: return results sorted by relevance
    // Scoring: exact match = 3, startsWith = 2, includes = 1
    // Return array of { value, score } sorted descending
  }
}

module.exports = { SearchIndex };
