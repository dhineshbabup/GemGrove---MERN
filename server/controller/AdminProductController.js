const Product = require("../DB/model/product");

exports.getAllProducts = async (req, res) => {
  const product = await Product.find({});
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const new_product = await Product.create(req.body);
    console.log(new_product);

    res.send(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};
