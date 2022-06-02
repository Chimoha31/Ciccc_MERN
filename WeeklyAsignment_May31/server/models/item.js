const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Item = mongoose.model("ItemSchema", ItemSchema);
module.exports = Item;