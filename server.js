const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Look at me now, I'm gettin paper");
});

module.exports = server;
