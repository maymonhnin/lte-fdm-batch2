# -- Loops --

# Exercises

# Task 1
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')


# Task 2
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

# Task 3
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
Note: Name your increment variable i. Update the variable in the while loop using i++.


# Task 4
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
Note: In the while loop, decrement the value of i using: i = i - 1.


# Task 5
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)




# Solutions

# Task 1
for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');


# Task 2
for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');


# Task 3
var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');


# Task 4
var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');


# Task 5
var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};