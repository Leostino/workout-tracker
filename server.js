const express = require("express");
const logger = require("morgan");


const PORT = process.env.PORT || 3000;



const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes")(app);


app.use(express.static("public"));



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  
});


