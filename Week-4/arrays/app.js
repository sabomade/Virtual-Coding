function myFunction() {
  //   * = required

  // variables
  var students = ["jessica", "brad", "tom", "molly", "ryan", "chole"];
  var gpa = [3.5, 3.8, 3.0, 4.0, 2.9, 3.7];
  var sentence = "The quick brown fox jumps over the lazy dog.";

  // .length
  console.log("# of students:", students.length);
  console.log("# of gpa values:", gpa.length);

  // indexOf(value*)
  console.log("students[1]:", students[1]);
  console.log("students.indexOf(jessica):", students.indexOf("jessica"));

  // toString() vs join()
  console.log(students);
  console.log("toString():", students.toString());
  console.log("join():", students.join());

  // slice(start index*, end index)
  console.log("slice(1,3):", students.slice(1, 3));
  console.log("slice(1):", gpa.slice(1));

  // splice(start index*, howMany, item 1, ..., item X)
  var students2 = students;
  console.log(students);
  console.log("splice(1,2):", students2.splice(1, 0, "harry", "bridget"));
  console.log(students2);

  // split(separator, limit) - actually a STRING method, returns an array
  console.log(sentence);
  console.log("no separator:", sentence.split());
  console.log("empty space separator:", sentence.split(""));
  console.log("1 space separator:", sentence.split(" "));
  console.log("1 space separator with limit 2:", sentence.split(" ", 2));

  // sort() gpa numbers low-high
  console.log(gpa);
  console.log("sort()", gpa.sort());
  // sort changes the original array
  console.log(gpa);

  // sort students by first letter, alpha a-z
  console.log(students.sort());
}
