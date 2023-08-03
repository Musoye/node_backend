const expressAsyncHandler = require('express-async-handler');

const setGoals = expressAsyncHandler(async (req, res) => {
    const { goals } = req.body;
    console.log(goals);
    res.json({ 'message': 'goals set' });
});

const getGoals = expressAsyncHandler(async (req, res) => {
    console.log(`${req.body}`.cyan.underline);
    res.json({ 'message': 'goals get' });
});

const getGoal = expressAsyncHandler(async (req, res) => {
    res.json({ 'message': `goal get ${req.params.id}` });
});

const updateGoal = expressAsyncHandler(async (req, res) => {
    res.json({ 'message': `goal update ${req.params.id}` });
});

const deleteGoal = expressAsyncHandler(async (req, res) => {
    res.json({ 'message': `goal delete ${req.params.id}` });
});

module.exports = { setGoals, getGoals, getGoal, updateGoal, deleteGoal };
