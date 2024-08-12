/* This function searches for characters inputted by the user in the searchbar. 
It finds the movie or actors name while it coverts it to lowercase and then checks each movie. 
then it will only display the movies with the same characters */
function searchMovies() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    
  
    var movieItems = document.querySelectorAll(".col");
    
   
    movieItems.forEach(function(movieItem) {
        var movieTitle = movieItem.querySelector("h6").textContent.toLowerCase();
        var actorNames = movieItem.querySelector("a").getAttribute("data-actors").toLowerCase();
        if (movieTitle.includes(searchInput)|| actorNames.includes(searchInput)) {
            movieItem.style.display = "block"; 
        } else {
            movieItem.style.display = "none"; 
        }
    });
}
/* This function clears the form from all error messages */
    function clearErrors() {
        errors = document.getElementsByClassName('formerror');
        for (let item of errors) {
            item.innerHTML = "";
        }
    }
    /* This function makes the error messages */
    function seterror(id, error) {
        var element = document.getElementById(id + "-error");
        element.innerHTML = error;
    }
    /* This function is to validate the form if it's correct it will validate it. */
    function validateForm() {
        var returnval = true;
        clearErrors();

        var name = document.forms['myForm']["inputname"].value;
        if (name.length < 3) {
            seterror("inputname", "*Length of name is too short");
            returnval = false;
        }

        if (name.length == 0) {
            seterror("inputname", "*Length of name cannot be zero!");
            returnval = false;
        }
        var lastname = document.forms['myForm']["inputlastname"].value;
        if (lastname.length < 3) {
            seterror("inputlastname", "*Length of name is too short");
            returnval = false;
        }

        if (lastname.length == 0) {
            seterror("inputlastname", "*Length of name cannot be zero!");
            returnval = false;
        }

        var email = document.forms['myForm']["inputemail"].value;
        if (email.length > 25) {
            seterror("inputemail", "*Email length is too long");
            returnval = false;
        }
        var phonenumber = document.forms ['myForm']["inputphonenumber"].value;
        if (!(/^\d{10}$/.test(phonenumber))) {
            seterror("inputphonenumber", "*Please enter a valid 10 digit phone number");
            returnval = false;
        }

        var cinema = document.forms ['myForm']["inputcinema"].value;
        if (cinema==="Choose...") {
            seterror("inputcinema", "*Please select a cinema");
            returnval = false;
        }

        var quantity = document.forms ['myForm']["inputquantity"].value;
        if (quantity==="Choose...") {
            seterror("inputquantity", "*Please select the number of tickets");
            returnval = false;
        }

        var movie = document.forms ['myForm']["inputmovie"].value;
        if (movie==="Choose...") {
            seterror("inputmovie", "*Please select a movie");
            returnval = false;
        }
        var time = document.forms ['myForm']["inputtime"].value;
        if (time==="Choose...") {
            seterror("inputtime", "*Please select a time");
            returnval = false;
        }

        if (returnval) {
            console.log ("form validation succesful")
            window.location.href= "boughttickets.html";
            return false;
        }

        return returnval;
    }
