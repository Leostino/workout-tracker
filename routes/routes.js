const mongoose = require("mongoose");

const db = require("./models/index");

const path = require("path");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", { useNewUrlParser: true });



module.exports = function(app) {

app.get("/", (req,res) => {

    res.sendFile(path.join(__dirname, "../public/html/workout.html"));

})

app.post("/new-user", (req,res) => {
    const newUser = {
        username: req.body.username
    }
    db.User.create(newUser)
    .then(workoutUser => console.log("new user " +workoutUser+ " created"))
    .catch(({error}) => {
        console.log(error)
    })
})


app.post("/addrunning", ({body},res) => {
    db.Running.create(body)
    .then(({_id}) => db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true}))
    .catch(err => console.log(err))

})

    
app.post("/addbiking", ({body},res) => {
    db.Biking.create(body)
    .then(({_id}) => db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true}))
    .catch(err => console.log(err))

})


app.post("/addlifting", ({body},res) => {
    db.WeightLifting.create(body)
    .then(({_id}) => db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true}))
    .catch(err => console.log(err))

})



app.get("/viewall", (req,res) => {

    let user = req.body.username
    db.User.findAll({username: user})
    .populate("workouts")
    .then(userWorkouts => {
        res.json(userWorkouts)
    })
    .catch(err => {
        res.json(err);
    })
})




}
