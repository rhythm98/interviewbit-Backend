<h1 align = "center" > Interview Scheduler </h1>

</p>

### A simple app where admins can create interviews by selecting participants, interview start time and end time

# BACKEND

## Node.js for backend.

## MongoDB Cloud for database, get connection URL to connect with express.

```shell
$ git clone https://github.com/rhythm98/interviewbit-Backend.git (Backend)
$ cd interviewbit-Backend
$ npm i
$ node src/run.js # to start server
```
## Visit `http://localhost:2323/`

### [Extension to make REST API requests inside VS Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
<!-- see rest -->

## Business Logic

### Admin

1. **Schedule meetings between Interviewers and Candidates**
   this will create a new meeting
    
    required fields are

   - timeCreated
   - startTime
   - endTime
   - list of candidates
   - list of interviewers
   - meeting Title
   - meeting Description
   - timeZone


2. **Select appropriate person(who is available for the interview) only for the meeting**
   

3. **Check status of a particular meeting(over/ongoing/upcoming)**
   
4. **Edit meeting details** 

5. **Delete a meeting**

6. **Candidate can upload the resume** `TBD`

7. **Send notification/mail to the attendees using 3rd party API like twillo** `TBD`

8. **We can upload candidates resume using 3rd party API like cloudinary** `TBD`

## API Documentation

### `meetings`

1. `POST /api/meetings`

Creates a new meeting with required fields in body - `timeCreated`, `startTime`, `endTime`, `interviewers` (Array), `candidates` (Array), `title`, `description`, `timezone` 

2. `GET /api/meetings/{id}`

Get meeting details with a given meeting id

3. `GET /api/meetings`

Get list of all meetings

4. `PUT /api/meetings/{id}`

Update meeting details with a given meeting id

5. `DELETE /api/meetings/{id}`

Delete meeting with a given meeting id


> ### Project Structure

```shell
backend
│
├── .env # Backend
├── controllers            # (functions to execute mongodb queries)
│   ├── meetings.js        # (createMeetings, fetchMeetingById, editMeetings, deleteMeetings)
│   └── users.js           # (fetchUsers, fetchUserById, createUser)
│
├── models                 # ORM using mongoose
│   ├── Meeting.js
│   └── User.js            # (creating table users, meetings)
├── routes
│   └── api
│       ├── meetings.js
│       └── users.js
├── run.js
└── server.js
```

## Have a look on Frontend **[React used](https://github.com/rhythm98/interviewbit-Backend)**.