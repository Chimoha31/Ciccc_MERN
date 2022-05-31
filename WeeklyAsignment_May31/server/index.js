const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("This is testt for server");
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT} 👯‍♀️ `);
})