// const Meeting = require('./Meeting')
const mongoose = require('mongoose')
const { Timestamp } = require('bson')
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailID: {
    type: String, //check dataType, validate
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Interviewer', 'Candidate'],
  },
  resumeURL: {
    type: String, //check dataType
    required: true,
  },

  meetingSlots: {
    type: Array,
    required: true,
    slots: {
      startTime: {
        type: Timestamp,
        require: true,
      },
      endTime: {
        type: Timestamp, //timeStamp not working
        require: true,
      },
    },
  },
})
module.exports = mongoose.model('User', userSchema)
