import userModel from '../user/user.model';

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    text: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const PostModel = mongoose.model("Post", PostSchema)

module.exports = {
    PostModel
}
