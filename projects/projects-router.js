const express = require("express");
const router = express.Router();
const Projects = require("./projects-model.js");

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

module.exports = router;
