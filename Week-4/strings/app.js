function myFunction() {
  //   variables for testing
  var salutation = "Greetings!  It's lovely to meet you.";
  var goodbye = "See you later!";
  var name = "moLLy";

  //   length
  console.log(salutation.length);
  console.log(goodbye.length);
  console.log(name.length);

  //   toUpperCase() & toLowerCase()
  console.log(name);
  console.log(name.toUpperCase());
  console.log(name.toLowerCase());
  console.log(name);

  //   trim() removes whitespace before & after user input
  var ans = prompt("What is the name of your street?").trim();
  console.log(ans);
  var ansTrim = ans.trim();
  console.log(ansTrim);

  // replace([old value], [new value]), returns new string
  console.log(salutation);
  var hello = salutation.replace("Greetings", "Hello");
  console.log(hello);

  //   indexOf(element), remember starts at 0, returns the first position location of given element
  console.log(name);
  console.log("m is located at position:", name.indexOf("m"));
  console.log("o is located at position:", name.indexOf("o"));
  console.log("L is first located at position:", name.indexOf("L"));
  console.log("y is located at position:", name.indexOf("y"));

  //   slice([starting index], [ending index*]), returns new string.  Ending index is optional, if not included will return the rest of the string.
  console.log(salutation);
  var greeting = salutation.slice(0, 10);
  console.log(greeting);

  console.log(goodbye);
  var bye = goodbye.slice(8);
  console.log(bye);

  //   split([separater]), splits on the separator(s), returns an array of strings.
  console.log(bye);
  var arr = bye.split("!");
  console.log(arr);

  console.log(name);
  var arr2 = name.split("");
  console.log(arr2);
}
