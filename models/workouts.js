const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RunningSchema = new Schema({
  mileage: { type: Number, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now}
});

const Running = mongoose.model('Running', RunningSchema);

const WeightLiftingSchema = new Schema({
  laps: { type: Number, required: true },
  weight:{ type: Number, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now}
});

const WeightLifting = mongoose.model('WeightLifting', WeightLiftingSchema);

const BikingSchema = new Schema({
  mileage: { type: Number, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, default: Date.now}
});

const Biking = mongoose.model('Biking', BikingSchema);

const Workouts = {
  running: Running,
  biking: Biking,
  lifting: WeightLifting
}



module.exports = Workouts;