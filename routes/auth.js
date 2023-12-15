const router = require("express").Router();
const authControllers = require("../controllers/authControllers");

router.post("/Register", authControllers.CreateUser);
router.post("/Login", authControllers.LoginUser);

module.exports = router;
