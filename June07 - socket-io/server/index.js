const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
var cors = require("cors");
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // サーバーから送信されたメッセージを取得してブラウザの画面に表示する処理 = on (Receive emit() from client)
  socket.on("join_room", (data) => {
    console.log(data, "data from client");
    socket.join(data.roomNumber);

    console.log(`${data.username} connected with ID ${data.id} has joined room: ${data.roomNumber}`)
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT} 🎉`);
});
