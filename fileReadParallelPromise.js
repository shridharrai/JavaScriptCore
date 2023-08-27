const fs = require("fs");

fs.promises
  .readFile("f1.txt")
  .then((data) => console.log("Content " + data))
  .catch((err) => console.log("Error while reading file ", err));

fs.promises
  .readFile("f2.txt")
  .then((data) => console.log("Content " + data))
  .catch((err) => console.log("Error while reading file ", err));

fs.promises
  .readFile("f3.txt")
  .then((data) => console.log("Content " + data))
  .catch((err) => console.log("Error while reading file ", err));
