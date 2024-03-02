const express = require("express");
const {
  getProductByCategory,
  getImage,
  searchProduct,
  getProduct,
  getProducts,
  getWishlist,
  getNewArrival,
  getCart,
  addToCart,
  addToWishlist
  // getAddress,
} = require("../controller/ProductController");
const auth = require("./validate");
const router = express.Router();

router.get("/getimage", getImage);
router.route("/search/:search").get(searchProduct);
router.route("/product/:category").get(getProductByCategory);
router.route("/getproduct/:productid").get(getProduct);
router.route("/getproducts/:userId").get(getProducts);
router.route("/getnewarrival").get(getNewArrival);
// router.route("/getaddress").get(getAddress);
router.route("/getcart").get(auth, getCart);
router.route("/addtocart").post(auth, addToCart);
router.route("/getwishlist").get(auth, getWishlist);
router.route("/addtowishlist").post(auth, addToWishlist);

module.exports = router;
