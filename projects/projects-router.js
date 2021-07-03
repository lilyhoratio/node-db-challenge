const express = require("express");
const router = express.Router();
const Projects = require("./projects-model.js");

// ENDPOINTS
// --------------------------------------------------------

// READ
router.get(`/`, (req, res) => {
  Projects.findProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error retrieving projects" });
    });
});

router.get(`/:id`, (req, res) => {
  const projectId = req.params.id;
  Projects.findProjectById(projectId)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error retrieving projects" });
    });
});

router.get(`/:id/tasks`, (req, res) => {
  const projectId = req.params.id;
  Projects.findProjectIdTasks(projectId)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error retrieving project's tasks" });
    });
});

// CREATE

router.post(`/`, (req, res) => {
  // input validation - on what is required & types
  const project = req.body;
  Projects.insertProject(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error adding project" });
    });
});

module.exports = router;
