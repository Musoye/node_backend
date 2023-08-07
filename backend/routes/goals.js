const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {setGoals, getGoals, getGoal, updateGoal, deleteGoal} = require('./controller.js')

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').get(getGoal).put(updateGoal).delete(deleteGoal)

module.exports = router
