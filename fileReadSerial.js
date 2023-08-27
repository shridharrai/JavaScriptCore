const fs = require("fs");

console.log("Before Read");

fs.readFile("f1.txt", cb1);

// Callback hell
function cb1(err, data) {
  console.log("Content " + data);
  fs.readFile("f2.txt", cb2);
  function cb2(err, data) {
    console.log("Content " + data);
    fs.readFile("f3.txt", cb3);
    function cb3(err, data) {
      console.log("Content " + data);
    }
  }
}

console.log("After Read");
