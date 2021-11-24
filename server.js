// const { static } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
// database connection
const mongoose = require('mongoose')
const url =
  'mongodb+srv://rhythm98:test123@cluster0.bfom5.mongodb.net/scheduler?retryWrites=true&w=majority'

mongoose.connect(url)

const con = mongoose.connection
con.on('open', () => {
  console.log('Database Connected...')
})

// MIDDLEWARES
app.use(cors())
// to make POST request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/meetings', require('./routes/meetings'))
app.use('/users', require('./routes/users'))

module.exports = {
  app,
}
