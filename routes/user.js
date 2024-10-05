const express = require('express')
const router = express.Router()
const userController = require('../controllers/userControllers')

// route for profile
router.get('/profile',userController.profile)

// route for login
router.post('/login',userController.login)

// route for register
// app.post('/register',(req,res)=>{
//     res.send("Register for user")
// })

module.exports = router