const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Title: { type: String, required: true },
    Category: { type: String, required: true },
    Imageurl: { type: [String], required: true },
    OldPrice: { type: String, required: true },
    Sizes: {
      type: [
        {
          Size: { type: String, required: true },
          IsSelected: { type: Boolean, required: false, default: false },
        },
      ],
    },
    Price: { type: String, required: true },
    Description: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
