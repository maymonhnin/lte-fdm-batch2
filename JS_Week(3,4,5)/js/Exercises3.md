# -- Conditional --

# Exercises

# 1. find given number is even or odd. (The given number is 20.) 
even => 2, 4, 6, 8, ... (2 နဲ့ စားလို့ပြတ်) a % 2 == 0 , 6 % 2 == 0
odd => 1, 3, 5, .....  a % 2 != 0   3 % 2 = 1

# 2. Check whether does the user have driving license. (hint: user's current age is 25.)
age = 25
age < 18 => no
other => yes

# 3. Check whether the given number is positive or negative or zero. (The given number is 0)

# 4. Check is the user eligible to vote or not if the user’s age is 18 or older. //Using Tenary Operator (User's current age is 25)

# 5. Assign a branch name Based on the student’s marks and give output which branch.
(>= 90 => "Computer science engineering", > 80 => "Mechanical engineering", "Chemical engineering", "Electronics and communication", "Civil engineering", "Bio technology")
















# Solutions

# 1. 
let num = 20; 
  
if (num % 2 === 0) { 
    console.log("Given number is even number."); 
} 
  
if (num % 2 !== 0) { 
    console.log("Given number is odd number."); 
};


# 2.
let age = 25; 
  
if (age >= 18) { 
    console.log("You are eligible of driving licence") 
} else { 
    console.log("You are not eligible for driving licence") 
};


# 3. 
const num = 0; 
  
if (num > 0) { 
    console.log("Given number is positive."); 
} else if (num < 0) { 
    console.log("Given number is negative."); 
} else { 
    console.log("Given number is zero."); 
};


# 4. 
let age = 21; 
  
const result = 
    (age >= 18) ? "You are eligible to vote."
        : "You are not eligible to vote."; 
  
console.log(result);


# 5. 
const marks = 85; 

let Branch; 

switch (true) { 
	case marks >= 90: 
		Branch = "Computer science engineering"; 
		break; 
	case marks >= 80: 
		Branch = "Mechanical engineering"; 
		break; 
	case marks >= 70: 
		Branch = "Chemical engineering"; 
		break; 
	case marks >= 60: 
		Branch = "Electronics and communication"; 
		break; 
	case marks >= 50: 
		Branch = "Civil engineering"; 
		break; 
	default: 
		Branch = "Bio technology"; 
		break; 
} 
console.log(`Student Branch name is : ${Branch}`);
