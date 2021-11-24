// const User = require('./User')
const mongoose = require('mongoose')

const meetingSchema = new mongoose.Schema({
  // _id:{
  //     type: ObjectID,
  // required:true
  // }
  date: {
    type: Date, //how to store timeStamp/ date+time ??? Date BigInt
    required: true,
  },
  startTime: {
    type: Date, //how to store timeStamp/ date+time
    required: true,
  },
  endTime: {
    type: Date, //how to store timeStamp/ date+time
    required: true,
  },
  interviewers: {
    type: Array,
    required: true,
    users: [], //store id of interviewers
  },

  candidates: {
    type: Array,
    required: true,
    users: [], //store id of candidates
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
})
const Meeting = mongoose.model('Meeting', meetingSchema)
module.exports = {
  Meeting,
}
