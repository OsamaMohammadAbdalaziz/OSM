const router = require("express").Router();
const ProductsControllers = require("../controllers/ProductsControllers");

router.get("/", ProductsControllers.GetAllProducts);
router.get("/:id", ProductsControllers.GetProduct);
router.get("/search/:key", ProductsControllers.SearchProducts);
router.post("/:id", ProductsControllers.CreateProduct);

module.exports = router;
