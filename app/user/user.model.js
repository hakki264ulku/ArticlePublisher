const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: {
        type: String,
        min: 8
    },
    Posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

const UserModel =  mongoose.model("User", UserSchema)

module.exports = {
    UserModel
}