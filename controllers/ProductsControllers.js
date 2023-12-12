const Product = require("../models/Products");

module.exports = {
  CreateProduct: async (req, res) => {
    const NewProduct = new Product(req.body);
    try {
      await NewProduct.save();
      res.status(200).json("Product Created");
    } catch (error) {
      res.status(500).json("Failed to create Products");
    }
  },
};
