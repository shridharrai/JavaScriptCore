let myFun = (function () {
  let name = ""; //private

  const getName = function () {
    return name;
  };
  const setName = function (newName) {
    name = newName;
  };

  return { getName, setName };
})();

myFun.setName("Shridhar Rai");
console.log(myFun.getName());
// console.log(myFun.name);
