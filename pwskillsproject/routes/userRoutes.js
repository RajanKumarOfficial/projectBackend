const express = require("express");
const {
  home,
  userRegister,
  userLogin,
} = require("../controllers/userControllers.js");
const router = express.Router();

router.get("/", home);
router.post("/register", userRegister);
router.post("/login", userLogin);

module.exports = router;
