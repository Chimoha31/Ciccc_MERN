const Item = require("../models/item");

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
    price: req.body.quantity,
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

module.exports = {
  getItems,
  createItem
};
