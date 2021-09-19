const router = require("express").Router();
const Workout = require("../models/workout.js");
//const Transaction = require("../models/workout.js");

// routing to workout databse
// post - using it to send information to client 
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    // error in case route doesn't work
    .catch(err => {
      res.status(400).json(err);
    });
});

// put - using it to update the available database from client
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        {$push: { exercise: body}},
        { new:true, runValidators: true}

    ) .then((dbWorkout) => {
        res.json(dbWorkout);
    }).catch(err => {
      res.status(400).json(err);
    });
});

// get - using it to actually fetch updated info
router.get("/api/workouts", (req, res) => {
Workout.aggregate([
    {
        $addFields: {
            totalDuration: {
                $sum: "$exercise.duration",
            }
        }
    }
]) .then((dbWorkout) => {
    res.json(dbWorkout);
}) .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;