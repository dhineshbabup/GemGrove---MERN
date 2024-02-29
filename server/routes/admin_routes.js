const express = require('express');
const { getAllProducts, deleteProduct, addProduct, getProduct, updateProduct } = require('../controller/AdminProductController');
const router = express.Router();

router.route('/getProducts').get(getAllProducts)
router.route("/getproduct/:productid").get(getProduct);
router.route("/deleteitem/:id").delete(deleteProduct)
router.route("/addproduct").post(addProduct);
router.route("/updateproduct").post(updateProduct)
module.exports = router;