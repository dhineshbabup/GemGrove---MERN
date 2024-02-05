const express = require('express');
const { getProductByCategory, getImage, searchProduct } = require('../controller/ProductController');
const router = express.Router();

router.get("/",(req, res) => {
    res.json('Hello')
})
router.get("/getimage",getImage);
router.get("/search/:search").get(searchProduct);
router.route("/product/:category").get(getProductByCategory);
module.exports = router;