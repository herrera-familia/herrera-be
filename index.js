require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const knex = require("knex");
const dbConfig = require("./knexfile");
const bcrypt = require("bcrypt");

const server = express();
const db = knex(dbConfig.development);

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  db("users").then(data => {
    res.status(200).json({ ...data, message: "All is well" });
  });
});

server.post("/register", (req, res) => {
  console.log("inserting user");
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    db("users")
      .insert({ ...req.body, password: hash })
      .then(response => {
        console.log(response);
        res.status(201).json({ message: "user created" });
      })
      .catch(err => {
        console.log("There was an oopsie");
        res.status(500).json(err);
        console.error(err);
      });
  });
});

server.listen(8000, () => console.log("=== LISTENING ON PORT 8000 ==="));
