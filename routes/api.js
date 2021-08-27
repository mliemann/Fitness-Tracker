const router = require("express").Router();
const db = require("../models/Workout");

// Add exercises to the most recent workout plan.
router.put("/api/workouts/:id", (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } }
  )
  .then(dbworkouts => {
    res.json(dbworkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});
// Add new exercises to a new workout plan.
router.post("/api/workouts", ({body}, res) => {
  db.create(body)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
// View the combined weight of multiple exercises from the past seven workouts on the stats page.
router.get("/api/workouts", (req, res) => {
  db.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
  .then(dbworkouts => {
    res.json(dbworkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});
// View the total duration of each workout from the past seven workouts on the stats page.
router.get("/api/workouts/range", (req, res) => {
  db.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });
  
  module.exports = router;