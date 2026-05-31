const express = require("express");
const router = express.Router();
const userController = require("../controller/usercontroller");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/profile/:userId", userController.getUserProfile);
router.put("/profile/:userId", userController.updateUserProfile);
router.delete("/profile/:userId", userController.deleteUserProfile);

module.exports = router;
