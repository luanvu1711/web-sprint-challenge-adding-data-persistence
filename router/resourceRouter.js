const express = require("express")
const Resource = require("../model/resourceModel")

const router = express.Router()

router.get("/resources", async (req, res, next) => {
    try{
        const resource = await Resource.find()
        res.json(resource)
    } catch(err){
        next(err)
    }
})

router.post('/resources', (req, res) => {
    Resource.add(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
  });


module.exports = router