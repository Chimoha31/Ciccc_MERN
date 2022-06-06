const { findByIdAndDelete } = require("../models/item");
const Item = require("../models/item");
var cloudinary = require("cloudinary").v2;

const { NAME, API_KEY, API_SECRET, CLOUDINARY_URL } = process.env;

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
const createItem = async (req, res) => {
  const { itemName, quantity, price, image } = req.body;

  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "gvme62r1",
      });
      const savedItem = await item.save();
      const cloudinaryUrl = CLOUDINARY_URL;

      const item = new Item({
        itemName,
        quantity,
        price,
        image: cloudinaryUrl,
      });
      req.statusCode(201).send(savedItem);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

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
