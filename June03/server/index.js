const express = require("express");
const app = express();
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const PORT = process.env.PORT || 2000;

const {NAME, API_KEY, API_SECRET} = process.env;

//--------------------------------------------------
cloudinary.config({
  cloud_name: NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
  secure: true,
});
// ---------------------------------------------------
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API ENDPOINT");
});

app.post("/api/v1/upload", (req, res) => {
  cloudinary.uploader.upload("req.body.image", function (err, result) {
    if(err) {
      return res.status(500).json({
        err: err
      })
    }
    if(result) {
      return res.status(201).json({
        data: result,
        message: "Successfully uploaded the image !"
      })
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} `);
});
