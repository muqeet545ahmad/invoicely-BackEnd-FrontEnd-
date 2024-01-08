const express = require("express");
const router = express.Router();
const {
  createLoginUser,
  forgotPassword,
  getAllLoginUser,
  deleteLoginUser,
  updateLoginUser,
  LoginUser,
} = require("../Controllers/loginController");

router.post("/createUser", createLoginUser);
router.post("/loginUser", LoginUser);

router.get("/getLoginUser", getAllLoginUser);
router.post("/userforgotpassword", forgotPassword);
router.delete("/deleteLoginUser/:id", deleteLoginUser);
router.put("/updateLoginUser/:id", updateLoginUser);

module.exports = {
  LoginUserRouter: router,
};
