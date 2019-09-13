const express = require("express");
const projectsRouter = require("../projects/projects-router.js");
const resourcesRouter = require("../resources/resources-router.js");
const tasksRouter = require("../tasks/tasks-router.js");

const server = express();

server.use(express.json());

server.get(`/`, (req, res) => {
  res.status(200).json({ api: "up for sprint challenge!" });
});

// ROUTES
// ----------------------------------------------------------------
server.use(`/api/projects`, projectsRouter);
// server.use(`/api/resources`, resourcesRouter);
// server.use(`/api/tasks`, tasksRouter);

module.exports = server;
