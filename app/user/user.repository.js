const { UserModel } = require("./user.model");

async function createUser(user) {
    try {
        const response = await UserModel.create(user)
        return response
    } catch (e) {
        console.log(e);
        throw new Error("User could not created")
    }
}

async function getUser(userId) {
    try {
        const response = await UserModel.findById(userId)
        return response
    } catch (e) {
        console.log(e);
        throw new Error("User is not found!")
    }
}

module.exports = {
    createUser,
    getUser
}