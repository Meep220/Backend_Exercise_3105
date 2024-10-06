const express = require('express')
const router = express.Router()
const {userLogin,userRegister,getProfile} = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')
const { rateLimiter } = require('../middleware/rateLimitMiddleware')
const { logDetails } = require('../middleware/logMiddleware')
const authenticateUser = require('../middleware/authMiddleware')

// route for profile
router.get('/profile',rateLimiter,logDetails,authenticateUser,getProfile)

// route for login with
router.post('/login',rateLimiter,logDetails,userLogin)

//route for register
router.post('/register',rateLimiter,logDetails,userRegister)

module.exports = router