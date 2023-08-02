#!/usr/bin/node

const express = require('express')

const port = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.json({'message': 'boss sidi'})
})

app.listen(port, '127.0.0.1', () =>
{
    console.log('welcome')
})
