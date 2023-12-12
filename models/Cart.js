const mongoose = require("mongoose");
const CartShecma = new mongoose.Shcema({}, { timestamps: true });
module.exports = mongoose.model("Cart", CartShecma);
