const rateLimit = require ("express-rate-limit")

const rateLimiter = rateLimit({
    windowMs: 30 * 1000,
    max : 5,
    message: "You have reached more than 5 requests per minute"
})

module.exports = rateLimiter