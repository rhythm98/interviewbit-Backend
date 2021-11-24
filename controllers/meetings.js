const { Meeting } = require('../models/Meeting')
const { createCustomError } = require('../errors/custom-error')
// Validate data, if 1 person is busy he can't be scheduled


// const createMeeting1 = async (req, res) => {
//   const meeting = await Meeting.create(req.body)
//   res.status(201).json({ meeting })
// }

async function createMeeting(body) {
  
  try {
    const meeting = new Meeting({
      timeCreated: Date.now(),
      date:new Date(body.date),
      startTime: new Date(body.startTime),
      endTime: new Date(body.endTime),
      status: "upcoming",
      interviewers: body.interviewers,
      candidates: body.candidates,
      title: body.title,
      description: body.description,
    })
    await meeting.save()
    return ({meeting})
  } catch (e) {
    console.log(e.message);
    return {"message":"Error Occured"}//tell router that some error occured
  }
}
const updateMeeting = async (req, res, next) => {
  const { id: meetingID } = req.params
  const meeting = await Meeting.findOneAndUpdate({ _id: meetingID }, req.body, {
    new: true,
    runValidators: true,
    returnNewDocument: true
  })
  console.log(req.body);
  if (!meeting) {
    return next(createCustomError(`No task with id : ${meetingID}`, 404))
  }
  res.status(200).json({ meeting })
}

const deleteMeeting = async (req, res, next) => {
  // const { _id: meetingID } = req.params
  const meetingID = req.params.id
  const meeting = await Meeting.findOneAndDelete({ _id: meetingID })
  if (!meeting) {
    return next(createCustomError(`No Meeting with id : ${meetingID}`, 404))
  }
  res.status(200).json({ meeting })
}

module.exports = {
  createMeeting,
  deleteMeeting,
  updateMeeting,
}
