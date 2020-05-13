function myFunction() {
  //   ask a true or false question
  var answer = confirm("Do you like strawberries?");
  console.log(answer);

  //   if true
  if (answer) {
    alert("I like strawberries too!");
  } else {
    alert("That's too bad.");
  }

  //   ask for user input
  var result = Number(
    prompt("How many siblings do you have? Please enter a number.")
  );

  //   console.log user input for debugging purposes
  console.log(result);
  console.log("type of result", typeof result);

  //   various conditional cases to output a given response
  //   based on the value of the user's input.
  if (result === 0) {
    alert("Oh, an only child, huh?");
  } else if (result <= 2) {
    alert("Bet you're the baby in the family!");
  } else {
    alert("Wow!  You've got a big family!");
  }
}
