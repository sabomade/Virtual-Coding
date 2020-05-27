function myFunction() {
  var num1 = 10;
  var num2 = 3.4;
  var num3 = "15";

  console.log(num1, typeof num1, Number.isInteger(num1));
  console.log(num2, typeof num2, Number.isInteger(num2));
  console.log(num3, typeof num3, Number.isInteger(num3));

  var num1Str = num1.toString();
  console.log(num1Str, typeof num1Str);

  var num4 = Number(num3);
  console.log(num4, typeof num4);

  var num5 = parseFloat("7.54");
  console.log(num5, typeof num5);
  console.log(parseFloat(num2));

  var num6 = parseInt("3.9");
  console.log(num6, typeof num6);
  console.log(parseInt(num2));
}
