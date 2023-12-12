const mongoose = require("mongoose");
const UsersShecma = new mongoose.Shcema({}, { timestamps: true });
module.exports = mongoose.model("Users", UsersShecma);
