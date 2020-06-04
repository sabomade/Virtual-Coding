// hide score until button is pressed
document.querySelector(".score").style.visibility = "hidden";

// this function is called when the button is pressed
// HINT: to write to the DOM use document.querySelector("#someID").innerHTML = "some value";
function myFunction() {
  //   an array of objects containing our question, answer, and explanation if False
  // Feel free to change the questions &/or add more
  var quest = [
    {
      q: "True or False? Sharks are mammals.",
      a: "F",
      exp: "Sharks are fish.",
    },
    {
      q: "True or False? Spiders have six legs.",
      a: "F",
      exp: "Spiders have 8 legs.",
    },
    {
      q: "True or False? Venus is the closest planet to the Sun.",
      a: "F",
      exp: "Mercury is the closest planet to the Sun.",
    },
    { q: "True or False? Kelvin is a measure of temperature.", a: "T" },
    {
      q:
        "True or False? The chemical make up food often changes when you cook it.",
      a: "T",
    },
  ];
  //   score variables
  var win = 0;
  var lose = 0;

  //   index of current question
  var qIndex = 0;

  //  starts the game
  renderQuestion();
  updateScore(win, lose);

  //   show score
  document.querySelector(".score").style.visibility = "visible";

  // onkeyup is a method that listens for a key to be pressed
  document.onkeyup = function (event) {
    //   if there are no more questions left, return

    //   save the value of the key that was pressed, change it to Uppercase
    var userInput = event.key.toUpperCase();

    // Check to see if the userInput is a T or F and only run the following code if it is a T or F

    // If user guessed correctly, update the win variable, alert user they were correct (#result)

    // Else, update the lose variable, alert user they were wrong & print explanation to DOM (#result)

    // Increment the qIndex by 1 & call the renderQuestion function
  };
}

function renderQuestion() {
  //   YOUR CODE GOES HERE
  //   render one question to the DOM (#question)
}

function updateScore(val1, val2) {
  //   YOUR CODE GOES HERE
  //   write updated score to the DOM ()
}
