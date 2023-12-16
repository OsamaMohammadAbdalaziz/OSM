const Products = require("../models/Products");
const Cart = require("../models/Cart");

module.exports = {
  AddCart: async (req, res) => {
    const UserId = req.User.Id;
    const { CartItem, Quantity } = req.body;

    try {
      const Cart = await Cart.findOne({ UserId });

      if (Cart) {
        const ExistingProduct = Cart.Products.find(
          (Products) => Products.CartItem.toString() === CartItem
        );

        if (ExistingProduct) {
          ExistingProduct.Quantity += 1;
        } else {
          Cart.Products.push({ CartItem, Quantity: 1 });
        }
        await Cart.save();
        res.status(200).json("Product added to cart");
      } else {
        const newCart = new Cart({
          UserId,
          Products: [{ CartItem, Quantity: 1 }],
        });

        await newCart.save();
        res.status(200).json("Product added to cart");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getCart: async (req, res) => {
    const UserId = req.User.Id;

    try {
      const Cart = await Cart.find({ UserId });
      res.status(200).json(Cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteCartItem: async (req, res) => {
    const CartItemId = req.params.CartItem;

    try {
      const updatedCart = await Cart.findOneAndUpdate(
        {
          "Products._Id": CartItemId,
        },
        { $pull: { Products: { _Id: CartItemId } } },
        { new: true }
      );
      if (!updatedCart) {
        return res.status(404).json({ Message: "Cart item not found" });
      }

      res.status(200).json(updatedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
