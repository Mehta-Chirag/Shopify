const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productImage: String,
    name: String,
    price: Number,
    picture: String,
    discount: {
        type: number,
        default: 0
    },
    bgColor: String,
    panelColor: String,
    textColor: String,
});

module.exports = mongoose.model("products", productSchema)