const db = require("../data/dbConfig.js");
const mappers = require("../data/helpers/mappers.js");
const Tasks = require("../tasks/tasks-model.js");

module.exports = {
  findProjects,
  findProjectById,
  insertProject,
  findProjectIdTasks
};

// HELPERS
// --------------------------------------------------------

function findProjects() {
  return db("projects").then(projects => {
    const cleanedProjects = projects.map(project => {
      return mappers.cleanResource(project);
    });
    return cleanedProjects;
  });
}

function findProjectById(id) {
  return db("projects")
    .where("id", id)
    .first()
    .then(project => mappers.cleanResource(project));
}

// select * from projects p join tasks t ON t.project_id = p.id where p.id = 1;
// use reduce?

async function findProjectIdTasks(id) {
  // return db("projects as P")
  //   .join("tasks as T", { "T.project_id": "P.id" })
  //   .select(
  //     "P.id",
  //     "P.name",
  //     "P.description",
  //     "P.completed",
  //     "T.id as task_id",
  //     "T.description AS task_description"
  //   )
  //   .where("P.id", id);
  // // .first() // only works once 1 project is returned w/ all tasks & not when every task has new row
  // // .then(project => mappers.cleanResource(project));

  return db("projects")
    .where("id", id)
    .first()
    .then(project => {
      // find tasks
      const projectWithTasks = { ...project };
      return Tasks.findTasksByProjectId(id).then(tasks => {
        projectWithTasks.tasks = tasks;
        return projectWithTasks;
      });

      // this works
      // const projectWithTasks = { ...project };
      // return db("tasks")
      //   .where("project_id", project.id)
      //   .then(tasks => {
      //     const cleanedTasks = tasks.map(task => mappers.cleanResource(task));
      //     projectWithTasks.cleanedTasks = cleanedTasks;
      //     return projectWithTasks;
      //   });
    })
    .then(project => mappers.cleanResource(project)); // clean after
}

function insertProject(project) {
  return db("projects")
    .insert(project)
    .then(id => {
      return findProjectById(id[0]);
    });
}
