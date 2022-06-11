const { Socket } = require("dgram");
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const PORT = 5000;


const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    origin: ["GET", "POST"]
  }
});

io.on("connection", (data) => {
  socket.on("join_room", (data) => {
    socket.join(data.roomNumber);
    console.log(`${data.username} connected with ID ${socket.id} has joined room: ${data.roomNumber}`);
  })

  socket.on("change_of_turn", (dat) => {
    socket.to(room).emit("receive_turn", data);
  })
})




app.get("/", (req, res) => {
  res.send("API ENDPOINT")
})

server.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
})