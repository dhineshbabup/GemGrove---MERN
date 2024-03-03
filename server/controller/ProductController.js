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

  if (!cart || cart.length === 0) {
    return res.status(200);
  }

  var userCollection = await Collection.findOne({ user_Id: req.id });
  if (!userCollection) {
    userCollection = new Collection({
      user_Id: req.id,
      wishlist: [],
      cart: [],
    });
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
  var userCollection = await Collection.findOne({ user_Id: req.id });
  if (!userCollection) {
    userCollection = new Collection({
      user_Id: req.id,
      wishlist: [],
      cart: [],
    });
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

exports.removeFromCart = async (req, res) => {
  const { itemId } = req.body;
  const userId = req.id;

  try {
    let userCollection = await Collection.findOne({ user_Id: userId });

    if (!userCollection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    userCollection.cart = userCollection.cart.filter(
      (item) => item.id !== itemId
    );
    await userCollection.save();

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.removeFromWishList = async (req, res) => {
  const { itemId } = req.body;
  const userId = req.id;
  try {
    let userCollection = await Collection.findOne({ user_Id: userId });

    if (!userCollection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    userCollection.wishlist = userCollection.wishlist.filter(
      (item) => item.id !== itemId
    );
    await userCollection.save();

    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserCredential = async (req, res) => {
  const user = await User.findOne({ _id: req.id });
  res.send(user);
};
exports.updatePersonalInfo = async (req, res) => {
  const { name, email, mobile } = req.body;
  const user = await User.findById(req.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  // if(mobile.length !== 10) retu
  if (name) user.name = name;
  if (email) user.email = email;
  if (mobile) user.mobile_no = mobile;

  await user.save();

  return res.status(200).json(user);
};

exports.addAddress = async (req, res) => {
  try {
    const { addressInfo } = req.body;

    const user = await User.findById(req.id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.address.push(addressInfo);

    await user.save();

    res.status(200).json({ message: "Address saved successfully" });
  } catch (error) {
    console.error("Error saving address:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.deleteAddress = async (req, res) => {
  const { _id } = req.body;
  
  try {
    const user = await User.findById(req.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    // Filter out the address with the specified _id
    user.address = user.address.filter(address => address._id != _id);

    // Save the updated user document
    await user.save();

    res.status(200).send(user);
  } catch (error) {
    console.error('Error deleting address:', error);
    res.status(500).send({ error: 'Internal server error' });
  }
};

