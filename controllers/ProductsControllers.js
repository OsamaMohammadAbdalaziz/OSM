const Products = require("../models/Products");

module.exports = {
  CreateProduct: async (req, res) => {
    const NewProducts = new Products(req.body);
    try {
      await NewProducts.save();
      res.status(200).json("Product Created");
    } catch (error) {
      res.status(500).json("Failed to create Product");
    }
  },
  GetAllProducts: async (req, res) => {
    try {
      const Products = await Products.find().sort({ createdAt: -1 });
      res.status(200).json(Products);
    } catch (error) {
      res.status(500).json("Failed to get the Product");
    }
  },
  GetProduct: async (req, res) => {
    const ProductId = req.params.id;
    try {
      const Products = await Products.findById(ProductId);
      const { __v, createdAt, ...ProductData } = Products.doc;
      res.status(200).json(ProductData);
    } catch (error) {
      res.status(500).json("Failed to get the Product");
    }
  },
  SearchProducts: async (req, res) => {
    try {
      const results = await Products.aggregate([
        [
          {
            $search: {
              index: "Shoes",
              text: {
                query: req.params.key,
                path: {
                  wildcard: "*",
                },
              },
            },
          },
        ],
      ]);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json("Failed to get the Product");
    }
  },
};
