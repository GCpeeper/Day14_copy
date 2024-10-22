let fname = "" // Declare a variable to hold the first name

function greet() {
    let greet_box = document.getElementById("greet"); //grab the text box
    fname = document.getElementById("fname").value; // Get the value of the first name input field
    let lname = document.getElementById("lname").value; // Get the value of the last name input field
    let age = document.getElementById("age").value; // Get the value of the age input field

    greet_box.innerHTML = "Greetings " + fname + " " + lname + "!"; // Display the greeting message

    // remove vales from input fields
    // this doesn't work
    document.getElementById("fname").innerHTML = "";
    document.getElementById("lname").innerHTML = "";
    document.getElementById("age").innerHTML = "";
}

function checkTrivia1() {
    let trivia_answer = document.getElementById("trivia1-answer");

    let honey = document.getElementById("honey").checked; // Check if the honey checkbox is checked

    // Check if the user selected the correct answer
    if (honey) {
        trivia_answer.innerHTML = "Correct! Honey never spoils. Good job " + fname + "!";
    } else {
        trivia_answer.innerHTML = fname + " sorry but you are incorrect. Try again if you want!";
    }
}

function checkRadioLie() {
    let lie_answer = document.getElementById("lie-answer");

    let lie = document.getElementById("bone").checked; // Check if the bone radio button is checked

    // Check if the user selected the correct answer
    if (lie) {
        lie_answer.innerHTML = "Correct! I have broken bones Good job " + fname + "!";
    } else {
        lie_answer.innerHTML = fname + " sorry but you are incorrect. Try again if you want!";
    }
}