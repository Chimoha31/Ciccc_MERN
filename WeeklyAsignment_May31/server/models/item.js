const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Item = mongoose.model("ItemSchema", ItemSchema);
module.exports = Item;