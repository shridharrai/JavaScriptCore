const fs = require("fs");

const arr = ["f1.txt", "f2.txt", "f3.txt", "f4.txt"];

for (let i = 0; i < arr.length; ++i) {
  fs.promises
    .readFile(arr[i])
    .then((data) => console.log("Content " + data))
    .catch((err) => console.log("Error is ", err));
}
