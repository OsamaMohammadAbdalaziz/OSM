const router = require("express").Router();
const UsersControllers = require("../controllers/UsersControllers");
const { VerifyToken } = require("../middleware/VerifyToken");

router.get("/", VerifyToken, UsersControllers.getUser);
router.delete("/", VerifyToken, UsersControllers.deleteUser);

module.exports = router;
