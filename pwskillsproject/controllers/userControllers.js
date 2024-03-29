const User = require("../models/usermodel.js");

exports.home = (req, res) => {
  res.send("<h1>User Mangament Backend System by pw skills</h1>");
};

exports.userRegister = async (req, res) => {
  try {
    // jab aap first time value post method ki help se dete hai database me
    // tab const {} = req.body;
    // ==> awit SuperPower.create({app kya kay lena chahte hai})
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(200).json({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log("error :", error);
    res.status(400).json({
      success: true,
      message: "user not register",
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email || password) {
      const users = await User.create({
        email,
        password,
      });
      res.status(200).json({
        success: true,
        message: "User Login Successfully",
        users,
      });
    }
  } catch (error) {
    console.log("error : ", error);
    res.status(400).json({
      success: false,
      message: "user not login",
    });
  }
};
