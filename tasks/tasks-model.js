const db = require("../data/dbConfig.js");
const mappers = require("../data/helpers/mappers.js");

module.exports = {
  findTasks,
  findTaskById,
  insertTask,
  findTasksByProjectId
};

function findTasks() {
  return db("tasks as T")
    .innerJoin("projects as P", { "T.project_id": "P.id" })
    .select(
      "P.name as project_name",
      "P.description as project_description",
      "T.id as task_id",
      "T.description as task_description",
      "T.notes as task_notes",
      "T.completed" // renaming caused issue with cleanResource mapper
    )
    .then(tasks => {
      return tasks.map(task => mappers.cleanResource(task));
    });
}

function findTaskById(id) {
  return db("tasks")
    .where("id", id)
    .first()
    .then(task => mappers.cleanResource(task));
}

function findTasksByProjectId(id) {
  return db("tasks")
    .where("project_id", id)
    .then(task => mappers.cleanResource(task));
}

function insertTask(task) {
  return db("tasks")
    .insert(task)
    .then(id => {
      return findTaskById(id[0]);
    });
}
