const express = require("express");
const {
  getProductByCategory,
  getImage,
  searchProduct,
  getProduct,
  getProducts,
  getWishlist
} = require("../controller/ProductController");
const router = express.Router();

router.get("/getimage", getImage);
router.route("/search/:search").get(searchProduct);
router.route("/product/:category").get(getProductByCategory);
router.route("/getproduct/:productid").get(getProduct);
router.route("/getproducts/:userId").get(getProducts);
router.route("/getwishlist/:userId").get(getWishlist);
module.exports = router;
