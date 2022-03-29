
/**
 * RegisterUserRouters takes an express application and registers User routers
 * @param {Express} app 
 */
function RegisterUserRouters(app){
    app.post("/user", (req, res) => {
        const newUser = req.Body()
    })
}

