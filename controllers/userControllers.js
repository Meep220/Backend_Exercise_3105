const userModel = require('../models/userModel')

// login method
const login = (req,res) =>{
    const{ username, password } = req.body;

    const user = userModel.findUserAuth(username,password)

    if(user){
        res.status(200).json({message: 'Login Successful',user})
    }else{
        return res.status(401).json({message: 'Invalid user/Password'})
    }
    
}

const register = () =>{

}

const profile = (req, res) => {
    const userId = req.query.id;  
    const users = userModel.getUserList();

    console.log('User ID from query:', userId);
    console.log('Users from file:', users);

    const user = users.find(user => user.id === userId);
    console.log('Found user:', user);  // Log if user is found or not

    if (!user) {
        return res.status(404).json({ message: 'Profile Not Found' });
    }

    res.json({ message: user });
};

module.exports = {
    login,
    register,
    profile
}