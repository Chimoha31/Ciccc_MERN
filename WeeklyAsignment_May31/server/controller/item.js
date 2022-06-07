const { findByIdAndDelete } = require("../models/item");
const Item = require("../models/item");
var cloudinary = require("cloudinary").v2;

const { NAME, API_KEY, API_SECRET, CLOUDINARY_API} = process.env;

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

// // post(Create) a item data
const createItem = (req, res) => {
  const { itemName, quantity, price, image } = req.body;

  cloudinary.uploader.upload("req.body.image", function (err, result) {
    const newItem = {
      itemName,
      quantity,
      price,
      image,
    }
    const item = new Item(newItem)

    const cloudinary_API = CLOUDINARY_API
    console.log(cloudinary_API)

    if(err) {
      return res.status(500).json({
        err: err
      })
    }
    if(result) {
      const data = item.save();
      return res.status(201).json({
        data: data,
        message: "Successfully uploaded the image !"
      })
    }
  });
}




// // update a student data

// // delete a student data
const deleteItem = (req, res) => {
  const id = req.params.id;

  Item.findByIdAndDelete({ _id: id })
    .then((data) => {
      res.status(200).json({
        message: "Successfully deleted item",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Successfully deleted item",
        err: err,
      });
    });
};

module.exports = {
  getItems,
  createItem,
  deleteItem,
};
