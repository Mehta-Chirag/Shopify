const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    picture: { type: String },
    GSTIN: { type: String },
    products: { type: Array, default: [] }
});


module.exports = mongoose.model("owner", ownerSchema)