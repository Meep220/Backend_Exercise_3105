const fs = require('fs')
const path = require('path')

const usersFilePath = path.join(__dirname,'../data/users.json');

//function to get the user list from users.json
const getUserList = () =>{
    const data = fs.readFileSync(usersFilePath)
    return JSON.parse(data)
}
// maps the data to use 
const findUserAuth = (username,password) =>{
    const user = getUserList()
    return user.find(user => user.username === username && user.password === password)
}

module.exports = {
    getUserList,
    findUserAuth
}