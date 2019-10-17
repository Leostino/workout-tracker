// require dependencies needed for the server

const express = require("express");

const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// require the routes

require("./routes/route")(app);

app.use(express.static("public"));

// run server

app.listen(PORT, () => {
    
    console.log(`App running on port ${PORT}!`);
  
});


