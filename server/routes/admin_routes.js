const express = require('express');
const { getAllProducts, deleteProduct, addProduct } = require('../controller/AdminProductController');
const router = express.Router();

router.route('/getProducts').get(getAllProducts)
router.route("/deleteitem/:id").delete(deleteProduct)
router.route("/addproduct").post(addProduct);
module.exports = router;