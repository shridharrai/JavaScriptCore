const fs = require("fs");

fs.promises
  .readFile("f1.txt")
  .then(cb1)
  .then(cb2)
  .then(cb3)
  .catch((err) => console.log("Error is ", err));

function cb1(data) {
  console.log("Content " + data);
  return fs.promises.readFile("f2.txt");
}

function cb2(data) {
  console.log("Content " + data);
  return fs.promises.readFile("f3.txt");
}

function cb3(data) {
  console.log("Content " + data);
}
