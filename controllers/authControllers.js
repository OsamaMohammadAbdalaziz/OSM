const Users = require("../models/Users");

const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  CreateUser: async (req, res) => {
    const NewUser = new Users({
      UserName: req.body.UserName,
      Email: req.body.Email,
      Password: CryptoJS.AES.encrypt(
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
  LoginUser: async (req, res) => {
    try {
      const User = await Users.findOne({ Email: req.body.Email });
      !User && res.status(401).json({ Message: "Could not find the User" });

      const DecryptedPassword = CryptoJS.AES.decrypt(
        User.Password,
        process.env.SECRET
      );
      const ThePassword = DecryptedPassword.toString(CryptoJS.enc.Utf8);
      ThePassword !== req.body.Password &&
        res.status(401).json({ Message: "Wrong Password" });

      const UserToken = jwt.sign(
        {
          Id: User._Id,
        },
        process.env.JWT_SEC,
        { expiresIn: "21d" }
      );
      const { Password, __v, updeatAt, createdAt, ...others } = User._doc;

      res.status(200).json({ ...others, token: UserToken });
    } catch (error) {
      res
        .status(500)
        .json({ Message: "Failed to login check your credentials" });
    }
  },
};
