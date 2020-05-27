// What will this code output
// Put your answers where the ??? are

function myFunction() {
  var fruits = ["apple", "orange", "banana", ["strawberry", "blueberry"]];

  console.log("fruits", fruits);

  //   ???
  console.log("fruits.length", fruits.length);

  //   ???
  console.log("fruits[1]", fruits[1]);

  //   ???
  console.log("fruits[2]", fruits[2]);

  //   ???
  console.log("fruits[0]", fruits[0]);

  //   ???
  console.log("fruits[3]", fruits[3]);

  //   ???
  console.log("fruits[fruits.length]", fruits[fruits.length]);

  //   ???
  console.log("fruits[fruits.length-1]", fruits[fruits.length - 1]);

  //   ???
  console.log("fruits[3].indexOf(strawberry)", fruits[3].indexOf("strawberry"));

  //   ???
  console.log("fruits.indexOf(banana)", fruits.indexOf("banana"));

  //   ???
  console.log("fruits.indexOf(cherry)", fruits.indexOf("cherry"));
}
