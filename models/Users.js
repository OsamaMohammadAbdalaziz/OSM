const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema({}, { timestamps: true });
module.exports = mongoose.model("Users", UsersSchema);
