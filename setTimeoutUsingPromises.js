// Create a setTimeout with promises

const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

delay(3000).then(() => console.log("Run after some milli seconds"));
