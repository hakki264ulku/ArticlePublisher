const UserModel = require('../user/user.model');

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: String,
    commenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    // { type: Schema.Types.ObjectId, ref: 'Event' }
})

const CommetModel = mongoose.model("Comment", CommentSchema)

module.exports = {
    CommetModel
}
