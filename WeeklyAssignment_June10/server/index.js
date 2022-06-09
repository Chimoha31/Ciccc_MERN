const express = require('express')
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST'],
  }
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  })
})

server.listen(PORT, () => {
  console.log(`Server is running at Port, ${PORT}`);
})
