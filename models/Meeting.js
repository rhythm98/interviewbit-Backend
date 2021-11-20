// const User = require('./User')
const mongoose = require('mongoose')

const meetingSchema = new mongoose.Schema({
  // _id:{
  //     type: ObjectID,
  // required:true
  // }
  timeCreated: {
    type: String, //how to store timeStamp/ date+time ??? Date BigInt
    required: true,
  },
  startTime: {
    type: String, //how to store timeStamp/ date+time
    required: true,
  },
  endTime: {
    type: String, //how to store timeStamp/ date+time
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  interviewers: {
    type: Array,
    required: true,
    users: [],
  },

  candidates: {
    type: Array,
    required: true,
    users: [],
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  timezone: {
    type: String, //how to store timeStamp/ date+time
    required: true,
  },
})
const Meeting = mongoose.model('Meeting', meetingSchema)
module.exports = {
  Meeting,
}