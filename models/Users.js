const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema(
  {
    UserName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Location: { type: String, default: "Dubai UAE" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Users", UsersSchema);
