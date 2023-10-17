# Variable

# -- Exercises -- 

Declare a new variable named petDog and give it the name Rex.

Declare a new variable named petCat and give it the name Pepper.

Console.log the petDog variable.

Console.log the petCat variable.

Console.log the text "My pet dog's name is: " and the petDog variable.

Console.log the text "My pet cat's name is: " and the petCat variable.

Declare another variable and name it catSound. Assign the string of "purr" to it.

Declare another variable and name it dogSound. Assign the string of "woof" to it.

Console.log the variable petDog, then the string "says", then the variable dogSound.

Console.log the variable petCat, then the string "says", then the variable catSound.

Reassign the value stored in catSound to the string "meow".

Console.log the variable petCat, then the string "now says", then the variable catSound.


# Answers

var petDog = 'Rex';

var petCat = 'Pepper';

var petDog = 'Rex'; // Task 1 solution
console.log(petDog);

var petCat = 'Pepper'; // Task 2 solution
console.log(petCat);

var petDog = 'Rex'; // Task 1 solution
console.log("My pet dog's name is: " + petDog);

var petCat = 'Pepper'; // Task 2 solution
console.log("My pet cat's name is: " + petCat);

var catSound = "purr";

var dogSound = "woof";

var petDog = 'Rex'; // Task 1 solution
var dogSound = "woof"; // Task 8 solution
console.log(petDog, "says", dogSound);


var petCat = 'Pepper'; // Task 2 solution
var catSound = "purr"; // Task 7 solution
console.log(petCat, "says", catSound);


var catSound = "purr"; // Task 7 solution
catSound = "meow";

var petCat = 'Pepper'; // Task 2 solution
var catSound = "meow"; // Task 11 solution
console.log(petCat, "now says", catSound);