// require Dependencies needed for the routes

const Workout = require("../models/workout");

const path = require("path");



// exporting the routes

module.exports = function(app) {

    
// route to direct the user to the index page once they load the app

app.get("/", (req,res) => {

    res.sendFile(path.join(__dirname, "../public/html/workout.html"));

})



// post route to add users running data to the database

app.post("/running", (req,res) => {

    let data = {

        workout: req.body.workout,
        distance: req.body.distance,
        duration: req.body.duration

    }

    Workout.create(data)
    .then(() => console.log("running data added"))
    .catch(err => console.log(err))
    
})


// post route to add user's biking data to the database
    
app.post("/biking", (req,res) => {

    let data = {

        workout: req.body.workout,
        distance: req.body.distance,
        duration: req.body.duration

    }

    Workout.create(data)
    .then(() => console.log("biking data added"))
    .catch(err => console.log(err))

})


// post route to add user's benchpress data to database

app.post("/benchpress", (req,res) => {

    let data = {

        workout: req.body.workout,
        laps: req.body.laps,
        weight: req.body.weight,
        duration: req.body.duration

    }

    Workout.create(data)
    .then(() => console.log("benchpress data added"))
    .catch(err => console.log(err))

})



// get route to get all user's workout data from the database

app.get("/viewall", (req,res) => {


    Workout.find({})
    .then(data => {
        console.log(data);
        res.json(data)
    })
    .catch(err => {
        res.json(err);
    })
})

}
