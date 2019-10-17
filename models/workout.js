// Require dependencies needed for the schema

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", { useNewUrlParser: true });

const Schema = mongoose.Schema;

// Collection

const WorkoutSchema = new Schema({

  workout: String,
  distance: Number,
  duration: Number,   
   
},{

  workout: String,
  distance: Number, 
  duration: Number,

},{

  workout: String,
  laps: Number,
  weight: Number,
  duration: Number

});


// assign schema to a variable and export


const Workout = mongoose.model('Workout', WorkoutSchema);


module.exports = Workout;



// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const WorkoutSchema = new Schema({

//   run_workout: String,
//   run_distance: Number,
//   run_duration: Number,    
  

//   bik_workout: String,
//   bik_distance: Number, 
//   bik_duration: Number,
  

//   bench_workout: String,
//   bench_laps: Number,
//   bench_weight: Number,
//   bench_duration: Number

// });


// const Workout = mongoose.model('Workout', WorkoutSchema);


// module.exports = Workout;