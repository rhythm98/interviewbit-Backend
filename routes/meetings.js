const mongoose = require('mongoose')
// const { wrap: async } = require('co')
// const only = require('only')
const { Meeting } = require('../models/Meeting')
const {
  createMeeting,
  deleteMeeting,
  updateMeeting,
} = require('../controllers/meetings')
// const meeting = mongoose.model('Meeting')
// const assign = Object.assign

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const meetings = await Meeting.find()
    res.json(meetings)
  } catch (err) {
    res.send('Error ' + err)
  }
})
router.get('/:id', async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id)
    // if no such meeting found return error message
    res.json(meeting)
  } catch (err) {
    res.send('Error ' + err)
  }
})

// For frontend search bar: search via meeting title or usersId, 
// router.get('/:key', async (req, res) => {
//   try {
//     const key=req.params.key
//     //find( { $text: { $search: "java coffee shop" } } )
//     const meeting = await Meeting.find($text:{ $search: key})
//     // if no such meeting found return error message
//     res.json(meeting)
//   } catch (err) {
//     res.send('Error ' + err)
//   }
// })

router.post('/', async (req, res) => {
  try {
    const meeting=await createMeeting(req.body,res)
    res.status(201).json(meeting)
    // console.log("status: ",status);
    // if (status) res.status(201).json(status)
    // else res.redirect('')
  } catch (err) {
    res.send('Error ' + err)
  }
})
router.route('/:id').put(updateMeeting).delete(deleteMeeting)
module.exports = router

/*
router.patch('/:id', async (req, res) => {
  try {
    const meeting = await Meeting.findById(req.params.id)
    // if no such meeting found return error message

    //change the required parameters
    // meeting.startTime=req.body.startTime
    // const m=await meeting.save()
    res.json(m)
  } catch (err) {
    res.send('Error ' + err)
  }
})
*/

/*router.delete('/:id', async (req, res) => {
  try {
    deleteMeeting(req.params._id)
    const meeting = await Meeting.findById(req.params.id)
    // if no such meeting found return error message
    // const m=await meeting.remove()
    res.json(m)
  } catch (err) {
    res.send('Error ' + err)
  }
})
*/

