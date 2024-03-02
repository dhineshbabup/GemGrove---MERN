const express = require("express");
const {
  getAllProducts,
  deleteProduct,
  addProduct,
  getProduct,
  updateProduct,
} = require("../controller/AdminProductController");
const router = express.Router();
const auth = require("./validate");

router.route("/getProducts").get(auth, getAllProducts);
router.route("/getproduct/:productid").get(auth, getProduct);
router.route("/deleteitem/:id").delete(deleteProduct);
router.route("/addproduct").post(addProduct);
router.route("/updateproduct").post(updateProduct);
module.exports = router;
