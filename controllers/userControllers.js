const userModel = require('../models/userModel')

// login method
const login = (req,res) =>{
    const{ username, password } = req.query;

    const user = userModel.findUserAuth(username,password)

    if(user){
        res.status(200).json({message: 'Login Successful',user})
    }else{
        return res.status(401).json({message: 'Invalid user or Password'})
    }
    
}

const register = (req,res) =>{
    const {username,password,email} = req.query
    // checks if all the fields have been checked out
    if(!username || !password || !email){
        return res.status(400).json({message: 'Username,password,email are required'})
    }

    const users = userModel.getUserList();

    const userExists = users.some(user => user.name === username || user.email === email)
    if(userExists){
        return res.status(409).json({message: 'User or email already exists'})
    }

    const newUser = {
        id: users.length + 1,
        username,
        password,
        email
    }

    users.push(newUser)
    userModel.UpdateUser(users)
    res.status(201).json({ message: 'User registered successfully', user: newUser });

}

const profile = (req, res) => {
    const userId = req.query.id;  
    const users = userModel.getUserList();

    const user = users.find(user => String(user.id) === userId);

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