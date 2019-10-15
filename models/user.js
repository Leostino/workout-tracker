const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: 
    { 
      type: String, 
      required: true, 
      unique: true 
    },
    workouts: [
        {
           type: Schema.Types.ObjectId,
            ref: "Running"
        },{
            type: Schema.Types.ObjectId,
            ref: "Biking"
        },{
            type: Schema.Types.ObjectId,
            ref: "WeightLifting"
        }
    ]
    
});

const User = mongoose.model('User', UserSchema);

module.exports = User;