// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };

// console.log("Name : ", person.name);
// console.log("Age : ", person.age);

// person.age = 26;
// console.log("Person after changing age: ", person)

// person["age"] = 30;
// console.log("Person after changing age 30: ", person)

// // console.log("typeof(person): ", typeof (person))

// console.log("person 2: person.introduceSelf ", person.introduceSelf())
// console.log(person.name[0])
// console.log(person["eyes"]) //bracket notation
// console.log(person.eyes) //dot notation

// ------------- Oct 17 Lecture ----------------------------------

// person.bio();
// person.introduceSelf();
// person["name"]["middle"] = "May Mon";
// person["name"]["last"] = "Hnin";
// console.log("person updated name :", person.name);
// console.log("Updated person: ", person);

// person.farewell = function () {
//   // console.log(`${this.name.middle} ${this.name.last} is ${this.age} years old.`)
//   return `${this.name.middle} ${this.name.last} is ${this.age} years old.`
// }

// person.bio();
// person.introduceSelf();
// // person.farewell();
// console.log("Farewell ::", person.farewell())

// profile = {
//         skincolor: "fair",
//         name : "May Mon",
//         sayHello : function () {
//             return `${this.name} has ${this.skincolor} complexion.`
//         },
//         possession: ["car","home","tele"]
// }
// profile.sayHello()
// console.log(profile.sayHello())
// console.log(`${profile.name} has ${profile.possession[0]}`)


let profile = {
  name: "MMH", // obj attr
  age: 26,
  skinColor: "Fair",
  sayHello: function () { //function obj attr
    return "Hello"
  },
  sayAddition: function (x, y) {
    return x + y
  },
  possession: ["Telephone", "home", "car"], //array obj attr
}
// console.log("Profile Object :", profile);

//accessing/getting/retrieving data obj attr
// 1) . notation, 2. [] bracket notation
console.log(`${profile.name} is ${profile.age} years old and has ${profile.skinColor} Complexion.`)
console.log(`${profile["name"]} is ${profile["age"]} years old.`)
console.log("Possession :: ", profile.possession);
console.log("Possession index 0 :", profile.possession[0]);
console.log(profile.sayHello())
console.log(profile.sayAddition(2, 4)) 
console.log(profile.sayAddition(5, 6))
//NaN = Not a Number

//updating data in object
profile.age = 30;
console.log("after updating age 30, profile object : ", profile);
// profile.possession = ["ring"] //updating, deleting data from array //next week
// console.log("after updating possession, profile object : ", profile);
profile["possession"]["accessories"] = "Ring";
console.log("after updating accessories , profile object : ", profile);
// how to check length of array
console.log("Length of possession : ", profile.possession.length);