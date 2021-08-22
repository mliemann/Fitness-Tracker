const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for excercise"
  },
  duration: {
    type: Number,
    required: "How long was the exercise?"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const workout = mongoose.model("Transaction", workoutSchema);

module.exports = workout;
