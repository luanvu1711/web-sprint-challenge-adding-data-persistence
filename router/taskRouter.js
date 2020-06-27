const express = require("express")
const Task = require("../model/taskModel")

const router = express.Router()

router.get("/tasks", async (req, res, next) => {
    try{
        const tasks = await Task.find()
        res.json(tasks)
    } catch(err){
        next(err)
    }
})


router.post('/tasks', (req, res) => {
    Task.add(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

module.exports = router