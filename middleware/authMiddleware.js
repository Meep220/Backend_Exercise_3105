const jwt = require('jsonwebtoken')

const authenticateUser = (req,res,next) =>{
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token){
        return res.status(400).json({message: 'Unauthorized: No token found'})
    }

    jwt.verify(token,'JWT_Token',(err,decoded)=>{
        if(err){
            return res.status(400).json({message:'Unauthorized: Invalid token'})
        }
        req.user = decoded
        next()
    })
}

module.exports = authenticateUser