var petDog = "Rex";


// var score = 8;

// if (score > 0 && score < 10) {
// console.log("Mid-level skills: true")
// }

// var score = 8;
// if (0 < score && score < 10) {
//     console.log("Mid-level skills:" + true);
// }

// var score = 8;
// var test = true;
// var error = false;

// if (score > 0 && score < 10) {
//     console.log("Mid-level skills: " + test)
// } else {
//     console.log("Mid-level skills: " + error);
// }


// let a = 0;
//       let b = 8;
// if (a > b) {
//     console.log("Mid-level skill is ", a);
// } else {
//     console.log("Mid-level-skill is", b);
// }

// var num = 23;
// if ( num % 2 == 0){
//     console.log("This is even number.")
// }else{
//     console.log("This is odd number.")
// }

var age = 12;

// if (age < 18){
//    console.log("User don't have driving license");
// } else{
//     console.log("User have driving license");
// }


// if (age >= 18) {
//     console.log("User have driving license");
// }
// else {
//     console.log("User don't have driving license");
// }


// single-line comment => //
// multiple-line comment =>

/*
&& => all true => true
|| => one true => true
*/

var timeRemaining = 4;
var energy = 10;

if (timeRemaining == 0 || energy == 0) {
    console.log("Game over: true")
}
else {
    console.log("Error")
}

// Task 3
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1, result2;
if (test1 !== 0) {
    result1 = false;
}
else {
    result1 = true;
}
    console.log("Is", num1, "an even number?", result1)


if (test2 !== 0) {
    result2 = false;
    
}
else {
    result2 = true;
}
console.log("Is", num2, "an even number?", result2)

/*
Is 2 an even number? true

Is 5 an even number? false
*/

//  Task 4
var a = 5;
var b = 10;
var result = a + b;
console.log("the result of adding two numbers, 5 and 10", result);
console.log("type of result :", typeof(result))

// Task 5
var now = "Now in ";
var three = 3; 
var d = "D!";
var answer = now + three + d;
console.log("The expected output should be: now + three + d ::::", answer);
console.log("Data type of answer :", typeof (answer));


// Task 6
var counter = 0;
// counter += 5; x+=1 x = x+1
counter = counter + 5;
// counter += 3;
counter = counter + 3;
console.log("value of counter :", counter);


console.log("\n Switch >>>>>>>>>> ")
// Switch statement
let mark = 15;
let branch;

switch (true) {
    case mark >= 90:
        branch = "Computer science engineering";
        break;
    case mark >= 80:
        branch = "Branch 2";
        break;
    default:
        branch = "Mark Input Error";
        break;
}
console.log(`Student Branch name is : ${branch}`);


var i = 5;

switch (i) {
    case 1:
        console.log("a");
        break;
    case 2:
        console.log("b")
        break;
    default:
        console.log("default")
}

const x = 5;
switch (x) {
  case 2:
    console.log(2);
    break; // it encounters this break so will not continue into 'default:'
  default:
    console.log("default");
  // fall-through
  case 1:
    console.log("1");
}


const input = 8;
let output = "Output: ";
switch (input) {
  case 0:
    output += "So "; 
  case 1:
    output += "What "; // output = output + "What "
        output += "Is "; // output = output (Output: What ) + "Is "
        // break;
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    console.log(output);
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
// Output: 1 Is 1 What 1
// Output: What Is Your Name?
// 

// Ternary Operator
// function getFee(isMember) {
//   return isMember ? '$2.00' : '$10.00';
// }

// console.log(getFee(true));
// console.log(getFee(null));