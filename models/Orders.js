const mongoose = require("mongoose");
const OrdersSchema = new mongoose.Schema(
  {
    UserId: { type: String, required: true },
    CustomerId: { type: String, required: true },
    ProductId: { type: mongoose.Schema.Types.ObjectId, Reference: "Product" },
    Quantity: { type: Number, required: true },
    SubTotal: { type: Number, required: true },
    Delivery_Status: { type: String, required: true, default: "pending" },
    Payment_Status: { type: String, required: true },
    Total: { type: Number, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Orders", OrdersSchema);
