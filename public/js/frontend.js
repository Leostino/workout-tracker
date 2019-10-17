// when the app loads

$(document).ready(() => {
    
    // hide these elements
    
    $("#add-workout").hide()
    
    $("#view-workout").hide()

    $("#view-button").hide();

})


// when create-user button is clicked

$("#create-button").on("click", event => {

    // prevent form submission

    event.preventDefault();

    // if no username, alert the user

    if(!$("#username").val()) {
    
        alert("Username required")

    }else{

        // if username load the page for the user

        let username = $("#username").val().trim();

    
        $("#welcomeUser").html("Welcome "+ username);
    
        $("#user-form").hide();
    
        $("#add-workout").show();

        $("#view-button").show();

    }


})



// when view all button is clicked

$("#view-button").on("click",() => {

    // hide all these but show only the view workout section

    $("#user-form").hide();
    
    $("#add-workout").hide();

    $("#view-button").hide();

    $("#view-workout").show();


    // ajax call to get all workouts from database
    
    $.ajax("/viewall", {
    
        type: "GET",

        dataType: "json"
  
      }).then(data => {

        // loop throught call back and append to the section element

        let section = $("$view-workout");

        let div = $("<div>");

        console.log(data);

        for(let i = 0; i < data.length; i++) {

            section.html(data[i]);

            // div.append(data[i]);

        }

        
        
      })

})



// when the running data submit button is clicked

$("#run-button").on("click", event => {

    // prevent form submission

    event.preventDefault();


    // ajax call to post the data from the form to backend

    $.ajax("/running", {
    
        type: "POST",
  
        data: {
            workout: "running",
            distance: $("#run-distance").val(),
            duration: $("#run-duration").val()
        }
  
    }).then(() => console.log("Running added to database"))

    // clear the fields after posting

    $("#run-distance").val("");

    $("#run-duration").val("")

})




// when benchpress data submit button is clicked

$("#lift-button").on("click", event => {

    // prevent form submission

    event.preventDefault();


    // ajax call to post user's benchpress data to backend

    $.ajax("/benchpress", {
    
        type: "POST",
  
        data: {
            workout: "benchpress",
            laps: $("#lift-laps").val(),
            weight: $("#lift-weight").val(),
            duration: $("#lift-duration").val()
        }
  
    }).then(() => console.log("Bench press added to database"))

    // clear fields after posting

    $("#lift-laps").val("");

    $("#lift-weight").val("");

    $("#lift-duration").val("");

})



// when the biking data submit button is clicked

$("#bik-button").on("click", event => {

    // prevent form submission

    event.preventDefault();

    
    // ajax call to post user's biking data to backend

    $.ajax("/biking", {
    
        type: "POST",
  
        data: {
            workout: "biking",
            distance: $("#bik-distance").val(),
            duration: $("#bik-duration").val()
        }
  
    }).then(() => console.log("Biking press added to database"))

    // clear fields after post is done

    $("#bik-distance").val("");

    $("#bik-duration").val("");

})