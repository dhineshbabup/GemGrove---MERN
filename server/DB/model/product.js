const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  category: String,
  current_price: Number,
  old_price: Number,
  stocks: Boolean,
  reviews: String,
  images: [
    {
      image1: String,
      image2: String,
      image3: String,
      image4: String,
    },
  ],
  offer: String,
  tag: String,
});

const Product = mongoose.model("Products", productSchema);

module.exports = Product;
