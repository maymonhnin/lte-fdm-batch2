// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// let result = myFunction(4, 3);
// console.log("result : ", result);

// Ternary Operator => (condition) ? yes : no
function greeting(person) {
    const name = person ? person.name : "Enter your name";
    return name;
}
console.log("Greeting :: with para May", greeting({ name: "May" }));
console.log("Greeting :: with para null", greeting());


// // js function with ternary operator
// const greeting = (person) => {
//   const name = person ? person.name : "stranger";
//   return `Howdy, ${name}`;
// };
// console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
// console.log(greeting(null)); // "Howdy, stranger"



// num 1 + num 2
function addFunction(num1, num2) {
    return num1 + num2
}


function subFunction(num1, num2) {
    return num1 - num2;
}
let subValue = subFunction(34, 10); //console assigned value from function calling

console.log("first User :: SunFunction", subFunction(10, 45)) //console value from function calling
console.log("Second User :: ", addFunction(320, 45))
console.log("subValue : ", subValue)

// ------------- Oct 17 Lecture ----------------------------------
// using functin as variable values
addFunc = function (num1, num2) {
    //   console.log("Addition of num1 and num2 :", num1 + num2)
    return num1 + num2;
}
let x = addFunc(2, 3)
console.log("addition of num1 and 2 : ", x);

// function return
function myFunction(a, b) {
  return a * b; //function return
}
myFunction(3, 4);
// console.log("myFunction : ", myFunction(3,4))

// function output
mulFun = function () {
    console.log("Hello, This is function output with assigning function name");
}
mulFun()















