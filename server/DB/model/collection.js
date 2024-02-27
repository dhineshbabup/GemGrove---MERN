const mongoose = require('mongoose')

const collectionSchema = mongoose.Schema({
    user_Id: String,
    cart: [],
    wishlist:[]
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection