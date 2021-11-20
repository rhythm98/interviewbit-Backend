// require('dotenv').config()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const { app } = require('./server')
// const { db } = require('./models/db')
// const log = require('debug')('app:run')
const PORT = process.env.PORT || 2323

app.listen(PORT, () => {
  console.log('Server started on http://localhost:2323')
})
