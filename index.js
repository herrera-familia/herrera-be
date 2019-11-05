const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  console.log("get it");
  res.status(200).json({ message: "Server working" });
});

server.listen(8000, () => console.log("=== LISTENING ON PORT 8000 ==="));
