const mongoose = require("mongoose");

mongoose.connect("")

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean,
    contact: Number,
    picture: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model("user", userSchema)