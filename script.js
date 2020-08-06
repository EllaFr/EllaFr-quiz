//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var RickScore = 0;
var MortyScore = 0;
var SummerScore = 0;
var JerryScore = 0;
var result = document.getElementById("result");
//#TODO: Use the DOM to create variables for the first quiz question.
//Variables for question 1
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

// Variables for question 2
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

// Variables for question 3
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

// Variables for question 4
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

// Variables for question 5
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#TODO: Add Event Listeners to your answer choice variables.
// question 1
q1a1.addEventListener("click", Summer);
q1a2.addEventListener("click", Morty);
q1a3.addEventListener("click", Jerry);
q1a4.addEventListener("click", Rick);

// quesiton 2
q2a1.addEventListener("click", Summer);
q2a2.addEventListener("click", Jerry);
q2a3.addEventListener("click", Rick);
q2a4.addEventListener("click", Morty);

// question 3
q3a1.addEventListener("click", Summer);
q3a2.addEventListener("click", Rick);
q3a3.addEventListener("click", Jerry);
q3a4.addEventListener("click", Morty);

// question 4
q4a1.addEventListener("click", Rick);
q4a2.addEventListener("click", Morty);
q4a3.addEventListener("click", Jerry);
q4a4.addEventListener("click", Summer);

// question 5
q5a1.addEventListener("click", Summer);
q5a2.addEventListener("click", Rick);
q5a3.addEventListener("click", Jerry);
q5a4.addEventListener("click", Morty);

//#TODO: Define quiz functions here
function Rick() {
  RickScore+=1;
  questionCount+=1;
  //alert("One Point to Rick!");

  if (questionCount >= 5) {
    updateResult();
  }
}

function Morty() {
  MortyScore +=1;
  questionCount +=1;
  //alert("One Point to Morty!");

  if (questionCount >= 5) {
    updateResult();
  }
}
function Summer() {
  SummerScore +=1;
  questionCount +=1;
  //alert("One Point to Summer!");

  if (questionCount >= 5) {
    updateResult();
  }
}
function Jerry() {
  JerryScore +=1;
  questionCount +=1;
  //alert("One Point to Jerry!");

  if (questionCount >= 5) {  
    updateResult();
  }
}

function updateResult() {
if (RickScore >= 3) {
  result.innerHTML = "Rick Sanchez! Your character is stuborn and does everything themselves and trys to act like they don't care, but deep down they do.";
} 
  else if (MortyScore >= 3) {
  result.innerHTML = "Morty!";
} 
  else if (SummerScore >= 3) {
  result.innerHTML = "Summer!";
} 
  else if (JerryScore >= 3) {
  result.innerHTML = "Jerry!";
} 
  else {
  result.innerHTML =
    "Woah...how much personalities do you have?! Refresh to try again...";
}
}

