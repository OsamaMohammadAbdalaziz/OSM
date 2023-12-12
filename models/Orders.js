const mongoose = require("mongoose");
const OrdersShecma = new mongoose.Shcema({}, { timestamps: true });
module.exports = mongoose.model("Orders", OrdersShecma);
