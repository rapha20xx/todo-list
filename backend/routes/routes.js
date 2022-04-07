const express = require('express');

const Task = require('../models/Task')

const router = express.Router()

// List All
router.get("/listAll", async (req, res) => {
    try {
        const task = await Task.find();

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({ error: 'List tasks failed' })
    }
});

// List by id
router.get("/list/:taskId", async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId);

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({ error: 'List task failed' })
    }
});

// Create
router.post("/add", async (req, res) => {
    try {
        const task = await Task.create(req.body);

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({ error: 'Add taks failed' })
    }
});

// Update
router.put("/update/:taskId", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.taskId, {$set: req.body}, { new: true });

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({ error: 'Update task failed' })
    }
});

//Delete
router.delete("/delete/:taskId", async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params.taskId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Delete task failed' })
    }
});

module.exports = app => app.use('/todo', router);