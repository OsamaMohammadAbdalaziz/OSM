const router = require("express").Router();
const OrdersControllers = require("../controllers/OrdersControllers");
const { VerifyToken } = require("../middleware/VerifyToken");

router.get("/", VerifyToken, OrdersControllers.getUserOrders);

module.exports = router;
