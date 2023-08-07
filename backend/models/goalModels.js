#!/usr/bin/node
// Goal Model
const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({
    text: String,
  });


module.exports = mongoose.model('Goal', goalSchema)
