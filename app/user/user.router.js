const UserService = require("./user.service")

async function CreateUserHandler(req, res){
    const user = req.body
    try {
        const newUser = await UserService.CreateUser(user)
        return res.json(newUser)
    } catch (e) {
        return res.status(400).json(e)
    }
}

async function GetUserHandler(req, res) {
    const id = req.query.id
    try {
        const user = await UserService.GetUser(id)
        return res.status(200).json(user)
    } catch (e) {
        return res.status(400).json(e)
    }
}

/**
 * RegisterUserRouters takes an express application and registers User routers
 * @param {Express} app 
 */
 function RegisterUserRouters(app){
    app.post("/user", CreateUserHandler)
    app.get("/user", GetUserHandler)
}

module.exports = {
    RegisterUserRouters
}
