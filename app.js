const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('../project/routes/user')
const rateLimitMiddleware = require('../project/middleware/rateLimitMiddleware')
const logMiddleware = require('../project/middleware/logMiddleware')

// main application
app.use(express.json())
app.use('/',userRoutes)
app.use(rateLimitMiddleware)
app.use(logMiddleware)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})