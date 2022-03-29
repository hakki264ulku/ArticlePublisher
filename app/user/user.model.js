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
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

export default mongoose.Model("User", UserSchema)