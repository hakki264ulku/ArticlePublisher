const UserRepository = require("./user.repository")

function CreateUser(user) {
    return UserRepository.createUser(user)
}

function GetUser(userId) {
    return UserRepository.getUser(userId)
}


module.exports = {
    CreateUser,
    GetUser
}