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
  console.log(req.params.productid);
  const product = await Product.findOne({ _id: req.params.productid });
  res.send(product);
};

exports.getProducts = async (req, res) => {
  console.log(req.params.userId);
  const cart = await Collection.findOne({_id: req.params.productid})
  console.log(cart);
  res.send(cart);
}
exports.getWishlist = async (req, res) => {
  console.log(req.params.userId);
  const wishlist = await Collection.findOne({_id: req.params.productid})
  console.log(wishlist);
}
