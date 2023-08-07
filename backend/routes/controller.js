const expressAsyncHandler = require('express-async-handler');
const Goal = require('../models/goalModels.js');

const setGoals = expressAsyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Please enter a goal');
    }
    const goals  = await Goal.create({ text: req.body.text });
    console.log(goals);
    res.status(201).json(goals);
});

const getGoals = expressAsyncHandler(async (req, res) => {
    const goals = await Goal.find();
    console.log(`${goals}`.cyan.underline);
    res.json(goals);
});

const getGoal = expressAsyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    } 
    res.status(200).json(goal);
});

const updateGoal = expressAsyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal || !req.body.text) {
        res.status(404);
        throw new Error('Goal not found');
    }
    const UpdatedGoal = await Goal.findByIdAndUpdate(req.params.id, {"text": req.body.text})
    res.status(200).json(UpdatedGoal);
});

const deleteGoal = expressAsyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(404);
        throw new Error('Goal not found');
    }
    const deleteGoal = await Goal.findByIdAndDelete(req.params.id)
    res.json(deleteGoal);
});

module.exports = { setGoals, getGoals, getGoal, updateGoal, deleteGoal };
