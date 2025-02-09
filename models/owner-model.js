const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    picture: String,
    GSTIN: String,
    products: {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model("owner", ownerSchema)