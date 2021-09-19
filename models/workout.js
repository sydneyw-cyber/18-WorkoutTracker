const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),

    },

    exercise: [
        {
            type: {
                type: String,
                trim: true,
                required: "What type of exercise is this"
            },
            name: {
                type: String,
                trim: true,
                required: "What is the name of the exercise"
            },
            duration: {
                type: Number,
                required: "How long is the duration of this exercise"


            },
            weight: {
                type: Number,
                required: "How much weight is used for this exercise"
            },
            reps: {
                type: Number,
                required: "How many reps are used for this exercise"
            },
            sets: {
                type: Number,
                required: "How many sets "
            },

        },
    ],






});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;