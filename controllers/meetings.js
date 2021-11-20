const { Meeting } = require('../models/Meeting')

// Validate data, if 1 person is busy he can't be scheduled

async function createMeeting(body) {
  console.log("IB")
  try {
    
    const meeting = new Meeting({
      timeCreated: body.timeCreated,
      startTime: body.startTime,
      endTime: body.endTime,
      status: body.status,
      interviewers: body.interviewers,
      candidates: body.candidates,
      title: body.title,
      description: body.description,
      timezone: body.timezone,
    })
    await meeting.save()
  } catch (e) {
    console.log(e.message);
    return {"message":"Error Occured"}//tell router that some error occured
  }
}

module.exports = {
  createMeeting,
}
