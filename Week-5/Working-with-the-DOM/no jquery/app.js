// this function is called when the button is pressed
function myFunction() {
  //   this code searches through the html for an element with id = random, then writes the following text inside that element.
  document.querySelector("#random").innerHTML = "Hi there!";
}

// onkeyup is a method that listens for a key to be pressed
document.onkeyup = function (event) {
  //   save the value of the key that was pressed, change it to lowercase
  var userInput = event.key.toLowerCase();

  //   only run this code if L is pressed
  if (userInput === "l") {
    document.querySelector("#letter").innerHTML = "I love icecream";
  }
  //   only run this code if T is pressed
  else if (userInput === "t") {
    document.querySelector("#letter").innerHTML =
      "I have never broken a bone, it's the truth!";
  }
  //   only run this code if D is pressed
  else if (userInput === "d") {
    document.querySelector("#letter").innerHTML =
      "Dog noses are wet to help absorb scent chemicals";
  }
  //   only run this code if B is pressed
  else if (userInput === "b") {
    document.querySelector("#letter").innerHTML = "Fortune favors the brave!";
  }
};
