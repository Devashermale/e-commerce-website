const express = require("express");
const router = express.Router();
const productController = require("../controller/productcontroller");
const upload = require("../middleware/productphoto");

router.post("/add", upload.single('image'), productController.createProduct);
router.get("/list", productController.getProducts);
router.get("/:productId", productController.getProductById);
router.put("/:productId", upload.single('image'), productController.updateProduct);
router.delete("/:productId", productController.deleteProduct);

module.exports = router;