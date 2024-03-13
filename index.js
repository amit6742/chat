const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");
app.use(express.static(path.resolve("public")));

// socket io
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("user-message", (message)=>{
    io.emit("message", message)
  })
  
});

server.listen(3000, () => {
  app.get("/", (req, res) => {
    return res.sendFile("./chat/public/index.html");
  });

  console.log("server is ready 3000 port");
});
