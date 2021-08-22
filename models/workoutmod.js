const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
},
exercises: [
  {
      type: {
          type: String,
          trim: true,
          required: "Required"
      },
      name: {
          type: String,
          trim: true,
          required: "Required"
      },
      duration: {
          type: Number,
          required: "Required"
      },
      weight: {
          type: Number,
      },
      reps: {
          type: Number,
      },
      sets: {
          type: Number,
      },
      distance: {
          type: Number,
      },
  }
]
});


const workout = mongoose.model("workoutmod", workoutSchema);

module.exports = workout;
