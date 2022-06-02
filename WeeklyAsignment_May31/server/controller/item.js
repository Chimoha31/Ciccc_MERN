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

// // update a student data

// // delete a student data

module.exports = {
  getItems
}