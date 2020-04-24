const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  return db("hobbits")
    .insert(hobbit, "id")
    .then((id) => {
      const iD = id[0];
      return findById(iD);
    });
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("hobbits");
}

function findById(id) {
  return db("hobbits").where({ id });
}
