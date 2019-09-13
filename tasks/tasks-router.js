const express = require("express");
const router = express.Router();
const Tasks = require("./tasks-model.js");

router.get(`/`, (req, res) => {
  Tasks.findTasks()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error retrieving tasks" });
    });
});

router.get(`/:id`, (req, res) => {
  const taskId = req.params.id;
  Tasks.findTaskById(taskId)
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error retrieving task" });
    });
});

router.post(`/`, (req, res) => {
  // input validation - on what is required
  Tasks.insertTask(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error adding task" });
    });
});

module.exports = router;
