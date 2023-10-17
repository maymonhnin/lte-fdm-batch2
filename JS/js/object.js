// obj name => car (model, name, type, function => Toyota S2 is $200 cost in Myanmar.)
let car = {
  model: "Toyota",
  name: "S2",
  type: "car type",
  price: "$200",
  getPrice: function () {
    return `${car.model} ${car.name} is ${car.price} cost in Myanmar.`
  },
  priceCalculation: function (x, y) {
    return x + y
  }
}

console.log(car.model)
console.log(car["price"])
console.log(car.getPrice()) //function calling, revoking
console.log(car.priceCalculation())