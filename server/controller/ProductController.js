const Collection = require("../DB/model/collection");
const Product = require("../DB/model/product");
const User = require("../DB/model/user");

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
exports.getNewArrival = async (req, res) => {
  if (!req.isAdmin) {
    const newProducts = await Product.find({
      createdAt: { $gte: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000) },
    });
    return res.send(newProducts);
  }
  return res.status(400).json({ message: "admin can't see it." });
};
// exports.getAddress = async (req, res) => {
//   const user = await User.findOne({ email: req.params.email });
//   console.log(user);
//   // res.send(user.address);
// };
exports.getCart = async (req, res) => {
  const user = await User.findOne({ email: req.email });
  const collection = await Collection.findOne({ user_Id: user._id });
  res.send(collection ? collection : []);
};
exports.getWishlist = async (req, res) => {
  const collection = await Collection.findOne({ user_Id: req.id });
  res.send(collection ? collection : []);
};

exports.addToCart = async (req, res) => {
  const { cart } = req.body;

  // Check if cart is undefined or empty
  if (!cart || cart.length === 0) {
    return res.status(400).json({ message: "Cart data is missing or empty" });
  }

  const userCollection = await Collection.findOne({ user_Id: req.id });
  if (!userCollection) {
    return res.status(404).json({ message: "Collection not found" });
  }
  for (let i = 0; i < cart.length; i++) {
    const newItem = cart[i];
    let itemExists = false;
    for (let j = 0; j < userCollection.cart.length; j++) {
      const existingItem = userCollection.cart[j];
      if (existingItem.id === newItem.id) {
        itemExists = true;
        break;
      }
    }
    if (!itemExists) {
      userCollection.cart.push(newItem);
    }
  }

  await userCollection.save();
  res.status(200).json({ message: "Cart updated successfully" });
};

exports.addToWishlist = async (req, res) => {
  const { wishlist } = req.body;
  const userCollection = await Collection.findOne({ user_Id: req.id });
  if (!userCollection) {
    return res.status(404).json({ message: "Collection not found" });
  }
  for (let i = 0; i < wishlist.length; i++) {
    const newItem = wishlist[i];
    let itemExists = false;
    for (let j = 0; j < userCollection.wishlist.length; j++) {
      const existingItem = userCollection.wishlist[j];
      if (existingItem.id === newItem.id) {
        itemExists = true;
        break;
      }
    }
    if (!itemExists) {
      userCollection.wishlist.push(newItem);
    }
  }

  await userCollection.save();
  res.status(200).json({ message: "Cart updated successfully" });
};
