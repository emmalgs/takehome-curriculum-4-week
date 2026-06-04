class TokenBucket {
  constructor(capacity, refillRate) {
    // TODO: capacity (max tokens), refillRate (tokens/sec)
    // Store: this.capacity, this.tokens, this.lastRefillTime
  }

  #refill() {
    // TODO: calculate elapsed seconds since lastRefillTime
    // Add elapsed * refillRate tokens, cap at capacity
    // Update lastRefillTime
  }

  consume(tokens) {
    // TODO: refill first, then check if enough tokens available
    // If yes: deduct and return true. If no: return false.
  }

  getTokens() {
    this.#refill();
    return this.tokens;
  }
}

module.exports = { TokenBucket };
