#!/usr/bin/node
// Learning express js
const express = require('express')
const colors =  require('colors')
const app = express()
const dotenv = require('dotenv').config()
//const mongoose = require('mongoose')
const port = process.env.PORT || 5000
console.log(`${port}`.cyan.underline)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goals.js'))

app.get('/', (req, res) => {
    res.json({'message': 'boss sidi'})
})


app.listen(port, '127.0.0.1', () =>
{
    console.log('welcome to the jungle'.rainbow)
})
