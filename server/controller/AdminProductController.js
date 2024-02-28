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
    res.status(500).json({ error: "An error occurred while deleting item" });
  }
};
