const express = require("express");
const router = express.Router();
const Resources = require("./resources-model.js");

router.get(`/`, (req, res) => {
  Resources.findResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error retrieving resources" });
    });
});

router.get(`/:id`, (req, res) => {
  const resourceId = req.params.id;
  Resources.findResourceById(resourceId)
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error retrieving resource" });
    });
});

router.post(`/`, (req, res) => {
  // input validation - on what is required
  Resources.insertResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Error adding resource" });
    });
});

module.exports = router;
