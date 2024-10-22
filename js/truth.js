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

function checkCheckBoxLie() {
    let checkbox_answer = document.getElementById("checkbox-answer");
    let AI = document.getElementById("AI").checked; // Check if the AI checkbox is checked
    let memory = document.getElementById("memory").checked; // Check if the memory checkbox is checked
    let bones = document.getElementById("bones").checked; // Check if the bones checkbox is checked
    checkbox_answer.style.color = "black"; // Reset the color of the answer text

    // Check if the user selected the correct answer
    if (AI && memory && bones) {
        checkbox_answer.innerHTML = "Sorry but you need to select only two. Try again if you want!";
    } else if (AI && memory) {
        checkbox_answer.innerHTML = "Correct! I have photographic memory and I have made an AI progam. Good job " + fname + "!";
    } else if ((AI && bones) || (memory && bones)) {
        checkbox_answer.innerHTML = "Sorry but Only one of those is correct. Try again if you want!";
    } else if (AI || memory || bones) {
        checkbox_answer.innerHTML = "Sorry but you need to select two answers. Try again if you want!";
    } else {
        checkbox_answer.style.color = "red";
        checkbox_answer.innerHTML = "Sorry but you did something wrong. Try again if you want!";
    }

}