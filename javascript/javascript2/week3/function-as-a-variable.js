// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.
function functionFour() {
  return "functionFour has been called";
}

function functionFive() {
  return "functionFive has been called";
}

function functionSix() {
  return "functionSix has been called";
}

const arrayTwo = [functionFour, functionFive, functionSix];

function displayTwo() {
  arrayTwo.map((item) => {
    console.log(item());
  });
}

displayTwo();

// Create a function as a const and try creating a function normally. Call both functions. Read up on this if you are interested: https://stackoverflow.com/questions/1013385/what-is-the-difference-between-a-function-expression-vs-declaration-in-javascrip
const firstNumber = function () {
  return 2;
};

function secondNumber() {
  return 4;
}

console.log(firstNumber());
console.log(secondNumber());

// Create an object that has a key whose value is a function. Try calling this function.
const objectOne = {
  id: 1,
  name: "First Example Object",
  functionKey: function () {
    return "I figured it out!";
  },
};

console.log(objectOne.functionKey());
