const express = require('express')
const User = require('../models/User')
const router = express.Router()
router.get('/', async (req, res) => {
  try {
    // const meetings = await Meeting.find()
    // res.json(meetings)
  } catch (err) {
    // res.send('Error ' + err)
  }
})
router.get('/:id', async (req, res) => {
  try {
    // const meeting = await Meeting.findById(req.params.id)
    // if no such meeting found return error message
    // res.json(meeting)
  } catch (err) {
    // res.send('Error ' + err)
  }
})

router.post('/', async (req, res) => {
//   const meeting = new Meeting({
//     timeCreated: req.body.timeCreated,
//     startTime: req.body.startTime,
//     endTime: req.body.endTime,
//     status: req.body.status,
//     candidates: req.body.candidates,
//     interviewers: req.body.interviewers,
//     title: req.body.title,
//     description: req.body.description,
//     timezone: req.body.timezone,
//   })
  try {
    // const m = await meeting.save()
    // res.json(m)
  } catch (err) {
    // res.send('Error ' + err)
  }
})
router.patch('/:id', async (req, res) => {
  try {
    // const meeting = await Meeting.findById(req.params.id)
    // if no such meeting found return error message

    //change the required parameters
    // meeting.startTime=req.body.startTime
    // const m=await meeting.save()
    // res.json(m)
  } catch (err) {
    // res.send('Error ' + err)
  }
})
router.delete('/:id', async (req, res) => {
  try {
    // const meeting = await Meeting.findById(req.params.id)
    // if no such meeting found return error message
    // const m=await meeting.remove()
    // res.json(m)
  } catch (err) {
    // res.send('Error ' + err)
  }
})

module.exports = router
