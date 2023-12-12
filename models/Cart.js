const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
  {
    UserId: { type: String, required: true },
    Products: [
      {
        CartItem: {
          type: mongoose.Schema.Types.ObjectId,
          Reference: "Product",
        },
        Quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Cart", CartSchema);
