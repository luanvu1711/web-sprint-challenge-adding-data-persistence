const express = require("express")
const Project = require("../model/projectModel")

const router = express.Router()

router.get("/projects", async (req, res, next) => {
    try{
        const projects = await Project.find()
        res.json(projects)
    } catch(err){
        next(err)
    }
})

router.post('/projects', (req, res) => {
    Project.add(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });


module.exports = router