#!/usr/bin/node
//Connect to MongoDB
//MONGO_URI = mongodb+srv://musoye:musoye@musoyecluster.ibnwiwn.mongodb.net/?retryWrites=true&w=majority

const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB
