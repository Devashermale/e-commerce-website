const express = require("express");
const router = express.Router();
const cartController = require("../controller/cartcontroller");

router.get("/get", cartController.getCart);
router.post("/get", cartController.addToCart);
router.get("/:userId", cartController.getCartItems);
router.delete("/remove/:userId/:productId", cartController.removeCartItem);
router.put("/update/:productId", cartController.updateCartItem)

module.exports = router;