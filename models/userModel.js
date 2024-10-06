const fs = require('fs')
const path = require('path')

const usersFilePath = path.join(__dirname,'../data/users.json');

//function to get the user list from users.json
const getUserList = () =>{
    const data = fs.readFileSync(usersFilePath)
    return JSON.parse(data)
}
// maps the data to use 
const findUser = (username,password) =>{
    const user = getUserList()
    return user.find(user => user.username === username && user.password === password)
}

const UpdateUserList = (users) =>{
    console.log('Updating Users')
    fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 2));
}

module.exports = {
    getUserList,
    findUser,
    UpdateUserList
}