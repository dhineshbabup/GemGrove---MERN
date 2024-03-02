const Product = require("../DB/model/product");

exports.getAllProducts = async (req, res) => {
  if (req.isAdmin) {
    const product = await Product.find({});
    return res.json(product);
  }
  res.status(401).json({ message: "you don't have the access for see it." });
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
    res.send(200);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};
exports.getProduct = async (req, res) => {
  const product = await Product.findOne({ _id: req.params.productid });
  res.send(product);
};

exports.updateProduct = async (req, res) => {
  const { _id, name, curr_price, old_price, images, category, tags, offer } =
    req.body;
  const updatedProduct = await Product.findByIdAndUpdate(
    _id,
    {
      name,
      curr_price,
      old_price,
      images,
      category,
      tags,
      offer,
    },
    { new: true }
  );
  if (!updatedProduct) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json(updatedProduct);
};
