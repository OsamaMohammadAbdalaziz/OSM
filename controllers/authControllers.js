const Users = require("../models/Users");

const cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  CreateUser: async (req, res) => {
    const NewUser = new Users({
      UserName: req.body.UserName,
      Email: req.body.Email,
      Password: cryptojs.AES.encrypt(
        req.body.Password,
        process.env.SECRET
      ).toString(),
      Location: req.body.Location,
    });
    try {
      await NewUser.save();
      res.status(201).json({ Message: "User Successfully Created" });
    } catch (error) {
      res.status(500).json({ Message: error });
    }
  },
  LoginUser: async (req, res) => {},
};
