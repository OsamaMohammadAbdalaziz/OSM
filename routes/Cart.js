const router = require("express").Router();
const CartControllers = require("../controllers/CartControllers");
const { VerifyToken } = require("../middleware/VerifyToken");

router.get("/find/", VerifyToken, CartControllers.getCart);
router.post("/Add/", VerifyToken, CartControllers.AddCart);
router.delete("/:CartItem", VerifyToken, CartControllers.deleteCartItem);

module.exports = router;
