const express = require("express");
const app = express();
const http = require('http');
const { Server } = require("socket.io");
const server = http.createServer(app);
const PORT = process.env.PORT || 2000;


const io = new Server(server, {
  conrs: {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log(socket);
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} 🎉`);
})