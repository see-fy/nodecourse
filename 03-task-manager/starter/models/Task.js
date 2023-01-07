const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a value"],
    trim: true,
    maxlength: [20, "No more than twenty characters"],
  },
  completed: {
    type: Boolean,
    //default: false
  },
});

module.exports = mongoose.model("Task", TaskSchema);
