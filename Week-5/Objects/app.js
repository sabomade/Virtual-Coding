function myFunction() {
  var car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  console.log("car object:", car);
  console.log("color of car:", car.color);

  var pizza = {
    crust: "deep dish",
    sauce: "tomato",
    cheese: "mozorella",
    toppings: ["pepperoni", "italian sausage", "basil"],
  };
  console.log("all pizza toppings", pizza.toppings);
  console.log("1st pizza topping:", pizza.toppings[0]);
}
