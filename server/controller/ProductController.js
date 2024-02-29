const Collection = require("../DB/model/collection");
const Product = require("../DB/model/product");

exports.getProductByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
};
exports.getImage = async (req, res) => {
  const p = await Product.find({});
  res.json(p);
};
exports.searchProduct = async (req, res) => {
  const regex = new RegExp(req.params.search, "i");
  const products = await Product.find({ category: { $regex: regex } });
  res.status(200).json(products);
};
exports.getProduct = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.productid });
  res.send(product);
};

exports.getProducts = async (req, res) => {
  const cart = await Collection.findOne({ _id: req.params.productid });
  console.log(cart);
  res.send(cart);
};
exports.getWishlist = async (req, res) => {
  const wishlist = await Collection.findOne({ _id: req.params.productid });
  console.log(wishlist);
};
exports.getNewArrival = async (req, res) => {
  const newProducts = await Product.find({
    createdAt: { $gte: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
  });
  res.send(newProducts);
};
