const Orders = require("../models/Orders");

module.exports = {
  getUserOrders: async (req, res) => {
    const UserId = req.User.Id;

    try {
      const UserOrders = await Orders.find({ UserId })
        .populate({
          path: "ProductId",
          select: "-Size -OldPrice -Description -Category",
        })
        .exec();

      res.status(200).json(UserOrders);
    } catch (error) {
      res.status(500).json({ Message: "Failed to get Orders" });
    }
  },
};
