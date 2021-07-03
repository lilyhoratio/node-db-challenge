const db = require("../data/dbConfig.js");
const mappers = require("../data/helpers/mappers.js");

module.exports = {
  findResources,
  findResourceById,
  insertResource
};

function findResources() {
  return db("resources");
}

function findResourceById(id) {
  return db("resources")
    .where("id", id)
    .first();
}

function insertResource(resource) {
  return db("resources")
    .insert(resource)
    .then(id => {
      return findResourceById(id[0]);
    });
}
