// Require dependencies needed for the schema

const mongoose = require('mongoose');

var databaseUri = "mongodb://localhost/workout_db";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
}else {
  mongoose.connect(databaseUri)
}

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", { useNewUrlParser: true });

const Schema = mongoose.Schema;

// Collection

const WorkoutSchema = new Schema({

  workout: String,
  distance: Number,
  duration: Number,   
  laps: Number,
  weight: Number


});


// assign schema to a variable and export


const Workout = mongoose.model('Workout', WorkoutSchema);


module.exports = Workout;



// let table = $("#view-workout");

//         let thead = $("<thead>");

//         table.append(thead);

//         let tbody = $("<tbody>");

//         table.append(tbody);

//         //console.log(data);

//         for(let i = 0; i < data.length; i++) {

//             // console.log(data[i])

//             div.html("likes");

//             if (i === 0) {
//                 var headRow = $("<tr>");
//               thead.append(headRow);

//         }

//         let tr = $("<tr>");
//         tbody.append(tr);

//         for (let key in data[i]) {
//             if (i === 0) {
//               let th = $("<th>");
//               th.innerText = key;
//               headRow.append(th);
        
//             }

//             let td = $("<td>");
//         td.innerText = data[i][key];
//         tr.append(td);
//       }
//     }
        
//})