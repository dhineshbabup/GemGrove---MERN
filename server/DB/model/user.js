const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  mobile_no: {
    type: String,
    minlength: 10,
    maxlength: 10,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  address: [
    {
      name: String,
      mobile_no: String,
      door_no: String,
      street: String,
      pincode: Number,
      city: String,
      state: String,
      place: String,
    },
  ],
  orders: [
    {
      orderId: String,
      orderDate: Date,
      order_status: String,
      product_id: String,
    },
  ],
});

const User = mongoose.model("User", user);
module.exports = User;
