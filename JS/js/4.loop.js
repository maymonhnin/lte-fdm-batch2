// js Switch
let favDrink = prompt("What's your favorite drink?", "Coca-Cola");
switch (favDrink) {
        case "Coca-Cola":
            console.log('Coca-Cola is price in 1200 MMK.');
            break;
        case "Pepsi":
            console.log('Pepsi is price in 1700 MMK.');
            break;
        case "Pocari Sweat":
            console.log('Pocari Sweat is price in 1900 MMK.');
            break;
        default:
            console.log(`Sorry, we are out of ${favDrink}.`);
    };

const foo = 0;
switch (foo) {
  case -1:
    console.log("negative 1");
    break;
  case 0: // Value of foo matches this criteria; execution starts from here
        console.log(0);
        break;
  // Forgotten break! Execution falls through
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    break; // Break encountered; will not continue into 'case 2:'
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}


console.log("\nWhile Loop >>>>>>>>>>>>");
// js while loop
let n = 0; 
let x = 0; 
while (n < 3) { //0 1 2 
  
  x += n; //0 0, 1 1, 2 3, 3 6
  n++; //1 2 3
  // x = x + n; 1 1, 2 3, 3 6
    console.log("n and x: " , n, x);
}
console.log(x);


// js for loop
console.log("\n For Loop >>>>>>>>>>>>");

for (let i = 0; i < 10; i++) {
    console.log(i, "Hello World!");
}


// js do-while loop
console.log("\n Do-while Loop >>>>>>>>>>>>");
let z = 0;
do {
  z += 1; //0 1, 1 2, 2 3,  3 4, 4 5, 
  console.log(z);
} while (z < 5);
console.log("\n");

// 1 to 10 (sum)
let sum = 0;
for (var i = 1; i <= 10; i++){ //1 > 10 1, 2, 3, ....., 9
  // sum += i;
  sum = sum + i; //1 1, 2 3, 3 6,4 10, 5 15, 6 21, 7 28, 8 36, 9 45, 10 55
  console.log("In Loop")
  console.log("sum of 1 to 10 : ", i, sum);
}
console.log("total sum of 1 to 10 :", sum);
console.log("Outside Loop")


// Homework
// ex1: to give output the sum of even number between 1 and 10 hint: 2, 4, 6, 8, 10 = 30 num % 2 == 0
// ex2: the sum of odd number between 1 and 10 