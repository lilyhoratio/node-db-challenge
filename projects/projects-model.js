const db = require("../data/dbConfig.js");
const mappers = require("../data/helpers/mappers.js");

module.exports = {
  findProjects
};

function findProjects() {
  return db("projects").then(projects => {
    const cleanedProjects = projects.map(project => {
      return mappers.cleanProject(project);
    });
    return cleanedProjects;
  });
}
