const Product = require("../model/product");
exports.getProductByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
};
exports.getImage = async (req, res) => {
  const p = await Product.find({});
  res.json(p);
};
exports.searchProduct = async (req, res) => {
  const regex = `/^${req.params.search}/`;
  console.log(regex);
  const products = await Product.find({category: regex});
  res.status(200).json(products);
};
