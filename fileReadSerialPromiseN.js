const fs = require("fs");

const arr = ["f1.txt", "f2.txt", "f3.txt", "f4.txt"];

let fileReadPromise = fs.promises.readFile(arr[0]);
for (let i = 1; i < arr.length; ++i) {
  fileReadPromise = fileReadPromise.then((data) => {
    console.log("Content " + data);
    return fs.promises.readFile(arr[i]);
  });
}

fileReadPromise.then((data) => console.log("Content " + data));
