const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    minlength: [3, "name can't be less than 3 characters"],
    maxlength: [40, "name can not be more than 40 characters"],
  },
  completed: {
    type: Boolean, 
    default: false,
  },
})

module.exports = mongoose.model("Task", TaskSchema)
