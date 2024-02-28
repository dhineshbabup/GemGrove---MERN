const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  curr_price: Number,
  old_price: Number,
  stocks: {
    type: Boolean,
    default: true,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  images: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
  },

  offer: String,
  tag: String,
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
