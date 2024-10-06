const express = require('express')
const router = express.Router()
const {userLogin,userRegister,getProfile} = require('../controllers/userControllers')
const authMiddleware = require('../middleware/authMiddleware')
const rateLimitMiddleware = require('../middleware/rateLimitMiddleware')
const logMiddleware = require('../middleware/logMiddleware')

// route for profile
router.get('/profile',rateLimitMiddleware,logMiddleware,getProfile)

// route for login
router.post('/login',rateLimitMiddleware,logMiddleware,userLogin)

//route for register
router.post('/register',rateLimitMiddleware,logMiddleware,userRegister)

module.exports = router