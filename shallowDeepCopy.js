let sports = ["Cricket", "Football", { a: "Hockey", b: "Tennis" }];
let newSports = [...sports]; // shallow copy
newSports[1] = "Baseball";
newSports[2]["a"] = "BasketBall"; // this will change in both the copies
// console.log("Old one ", sports);
// console.log("New one ", newSports);

sports = ["Cricket", "Football", { a: "Hockey", b: "Tennis" }];
let newSports2 = JSON.parse(JSON.stringify(sports)); // deep copy
newSports2[1] = "Baseball";
newSports2[2]["a"] = "BasketBall"; // this will change in only in the copy not in the original arr
// console.log("Old one ", sports);
// console.log("New one ", newSports2);

let person = {
  name: "Shridhar",
  age: 22,
  hobbies: ["sports", "coding"],
};
let newPerson = { ...person }; // shallow copy
newPerson.age = 23;
newPerson.hobbies[1] = "music"; // this will change in both the copies
// console.log("Old one ", person);
// console.log("New one ", newPerson);

person = {
  name: "Shridhar",
  age: 22,
  hobbies: ["sports", "coding"],
};
let newPerson2 = JSON.parse(JSON.stringify(person)); // deep copy
newPerson2.age = 23;
newPerson2.hobbies[1] = "music"; // this will change in only in the copy not in the original obj
console.log("Old one ", person);
console.log("New one ", newPerson2);
