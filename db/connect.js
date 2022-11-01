const mongoose = require("mongoose")

const connectionString =
  "mongodb+srv://beqarioni:sheyiladzee@cluster0.kvpza3x.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"

const connectDB = (url) => {
  return mongoose.connect(url)
}

module.exports = connectDB
