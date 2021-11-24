// const mongoose = require('mongoose')
const { User } = require('../models/User')

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.send('Error ' + err)
  }
})
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    // if no such meeting found return error message
    res.json(user)
  } catch (err) {
    res.send('Error ' + err)
  }
})


module.exports = router
