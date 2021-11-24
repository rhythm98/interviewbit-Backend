const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    default: '',
  },
  lastName: {
    type: String,
    required: true,
    default: '',
  },
  emailID: {//unique
    type: String, //check dataType, validate
    required: true,
    default: '',
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Interviewer', ''],
    default: 'Candidate',
  },
  resumeURL: {
    type: String, //check dataType
    required: true,
    default: '',
  },

  meetingID: {
    type: Array,
    required: true,
    id:[],
  },
})
const User = mongoose.model('User', userSchema)
module.exports={
  User,
}