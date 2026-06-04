class RateLimiter {
  constructor(maxRequests, windowMs) {
    // TODO
  }

  isAllowed(userId) {
    // TODO: sliding window — store timestamps per user, filter expired, check count
    // Return true if allowed, false if over limit
  }
}

module.exports = { RateLimiter };
