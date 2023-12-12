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
  GetAllProducts: async (req, res) => {
    try {
      const Products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(Products);
    } catch (error) {
      res.status(500).json("Failed to get the Products");
    }
  },
  GetProduct: async (req, res) => {
    const ProductId = req.params.id;
    try {
      const Product = await Product.findById(ProductId);
      const { __v, createdAt, ...ProductData } = Product.doc;
      res.status(200).json(ProductData);
    } catch (error) {
      res.status(500).json("Failed to get the Product");
    }
  },
  SearchProducts: async (req, res) => {
    try {
      const results = await Product.aggregate([]);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json("Failed to get the Product");
    }
  },
};
