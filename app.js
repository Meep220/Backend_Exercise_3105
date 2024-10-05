const express = require('express')
const app = express()
const port = 3000
const userRoutes = require('../project/routes/user')

// main application
app.use(express.json())
app.use('/',userRoutes)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})