const mongoose = require("mongoose");
const CartShecma = new mongoose.Shcema(
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
module.exports = mongoose.model("Cart", CartShecma);
