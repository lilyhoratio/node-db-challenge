const db = require("../data/dbConfig.js");
const mappers = require("../data/helpers/mappers.js");

module.exports = {
  findProjects,
  findProjectById,
  insertProject
};

function findProjects() {
  return db("projects").then(projects => {
    const cleanedProjects = projects.map(project => {
      return mappers.cleanProject(project);
    });
    return cleanedProjects;
  });
}

function findProjectById(id) {
  return db("projects")
    .where("id", id)
    .first()
    .then(project => mappers.cleanProject(project));
}

function insertProject(project) {
  return db("projects")
    .insert(project)
    .then(id => {
      return findProjectById(id[0]);
    });
}
