const { findByIdAndDelete } = require("../models/item");
const Item = require("../models/item");
var cloudinary = require('cloudinary').v2;

const {NAME, API_KEY, API_SECRET} = process.env;

cloudinary.config({ 
  cloud_name: NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});

// Get All students data
const getItems = (req, res) => {
  Item.find()
    .then((data) => {
      return res.status(200).json({
        messgae: "Successfully found All Items data",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There was an error",
        err: err,
      });
    });
};

// Get a student data

// // post(Create) a student data
const createItem = (req, res) => {
  const newItem = {
    itemName: req.body.itemName,
    quantity: req.body.quantity,
    price: req.body.price,
    image: req.body.image,
  };

  const item = new Item(newItem);

  try {
    const data = item.save();
    
    res.status(201).json({
      message: "Successfully created a student data !",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Successfully created a student data !",
      err: err,
    });
  }
};

// // update a student data

// // delete a student data
const deleteItem = (req, res) => {
  const id = req.params.id;

  Item.findByIdAndDelete({_id: id}).then((data) => {
    res.status(200).json({
      message: "Successfully deleted item",
      data: data,
    })
  }).catch((err) => {
    res.status(500).json({
      message: "Successfully deleted item",
      err: err
    })
  })
}

module.exports = {
  getItems,
  createItem,
  deleteItem,
};
