const express = require("express");

const Hobbits = require("../hobbits/hobbitsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/hobbits", (req, res) => {
  Hobbits.getAll()
    .then((hobbits) => {
      res.status(200).json(hobbits);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

server.get("/hobbits/:id", (req, res) => {
  Hobbits.findById(req.params.id)
    .then((hobbit) => {
      res.status(200).json(hobbit);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

server.post("/hobbits", (req, res) => {
  const hobbitInfo = req.body;

  Hobbits.insert(hobbitInfo)
    .then((hobbit) => {
      res.status(201).json({ message: "success", hobbit });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = server;
