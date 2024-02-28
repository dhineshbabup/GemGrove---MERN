const express = require('express');
const { getAllProducts, deleteProduct } = require('../controller/AdminProductController');
const router = express.Router();

router.route('/getProducts').get(getAllProducts)
router.route("/deleteitem/:id").delete(deleteProduct)
module.exports = router;