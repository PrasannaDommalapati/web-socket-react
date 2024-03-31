const { v4: uuidv4 } = require('uuid');
const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

const io = new Server(8071, {
  cors: {
    origin: "*", // Adjust the origin according to your needs for security
  },
});

console.log("Server started");

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("message", (message) => {
    try {
      const messageToSend = {
        sender: message.sender,
        body: message.body,
        sendAt: message.sendAt,
        id: uuidv4()
      };

      io.sockets.emit("message", messageToSend);
    } catch (e) {
      console.error("Error parsing message", e);
    }
  });

  socket.on("disconnect", (reason) => {
    console.log(`User disconnected: ${socket.id} ${reason}`);
  });
});
