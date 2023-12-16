const User = require("../models/Users");

module.exports = {
  getUser: async (req, res) => {
    try {
      const User = await User.findById(req.User.Id);

      const { Password, __v, updatedAt, createdAt, ...userData } = User._doc;

      res.status(200).json(userData);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete(req.User.Id);

      res.status(200).json("User Successfully deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
