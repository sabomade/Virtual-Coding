// testing variable, type number
var num = 3;

// this function is run everytime the click me button is pressed
function myFunction() {
  //   == equal to
  console.log("------ == equal to ------");
  console.log("sally == jane", "sally" == "jane");
  console.log("num(3) == str(3)", num == "3");
  console.log("num(3) == num(3)", num == 3);

  //   === equal value & type (preferred)
  console.log("------ === equal value & type (preferred) ------");
  console.log("num(3) === str(3)", num === "3");
  console.log("num(3) === num(3)", num === 3);

  //   != not equal
  console.log("------ != not equal ------");
  console.log("num(3) != num(5)", num != 5);
  console.log("num(3) != str(3)", num != "3");

  //   !== not equal value or type
  console.log("------ !== not equal value or type ------");
  console.log("num(3) !== num(3)", num !== 3);
  console.log("num(3) !== str(3)", num !== "3");
  console.log("num(3) !== num(5)", num !== 5);

  //   > great than
  console.log("------ > great than ------");
  console.log("num(3) > num(5)", num > 5);

  //   < less than
  console.log("------ < less than ------");
  console.log("num(3) < num(5)", num < 5);

  //   >= greater than or equal to
  console.log("------ >= greater than or equal to ------");
  console.log("num(3) >= num(5)", num >= 5);

  //   <= less than or equal to
  console.log("------ <= less than or equal to ------");
  console.log("num(3) <= num(5)", num <= 5);
}

// this program is run whenever the age test button is pressed
function myAge() {
  var userAge = prompt("How old are you?");
  //   if userAge is < 18, alert "Sorry, You're too young!"
  //   else, alert "Hooray! You're an adult!"
  if (userAge < 18) {
    alert("Sorry, You're too young!");
  } else {
    alert("Hooray! You're an adult!");
  }
}
