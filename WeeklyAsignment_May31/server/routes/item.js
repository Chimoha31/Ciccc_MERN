const express = require("express");
const router = express.Router();
const {getItems} = require("../controller/item");

// Get All items data
router.get("/", getItems);

// Get a item data
// router.get("/:id", getItemById);

// // post(Create) a item data
// router.post("/", createItem); 

// // update a item data
// router.put("/:id", updateItem);

// // delete a item data
// router.delete("/:id", deleteItem);

module.exports = router;