const jwt = require("jsonwebtoken");
const User = require("../models/Users");

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC, async (err, User) => {
      if (err) res.status(403).json("Invalid token");
      req.User = User;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated");
  }
};

module.exports = { VerifyToken };
