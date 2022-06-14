const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data.roomNumber)
    console.log(`${data.username} connected with ID ${socket.id} has joined room: ${data.roomNumber}`);
  })

  socket.on("change_of_turn", (data) => {
    socket.to(data.room).emit("receive_turn", data);
  })
  socket.on("count_turn", (data) => {
    socket.to(data.room).emit("receive_count", data);
  })
  socket.on("start_again", (data) => {
    socket.to(data.room).emit("restart_game", data);
  })
});


app.get("/", (req, res) => {
  res.send("API ENDPOINT");
});

server.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
});