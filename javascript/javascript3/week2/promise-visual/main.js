// Your task is to create two functions.

// 1. translateOneByOne - Should translate the circles one at a time from their random start position to their target see the target positions below. Log something out after each element has been moved
// 2. translateAllAtOnce - Should translate all the circles at the same time from their random start position to their target. Log out something after all elements have been moved

const redBox = document.querySelector("ul.marks li:nth-child(1)");
const blueBox = document.querySelector("ul.marks li:nth-child(2)");
const greenBox = document.querySelector("ul.marks li:nth-child(3)");
const boxes = [redBox, blueBox, greenBox];

function moveElement(boxToMove, newPosition) {
  return new Promise((resolve) => {
    boxToMove.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    boxToMove.addEventListener("transitionend", resolve);
  });
}

async function translateOneByOne() {
  try {
    await moveElement(redBox, { x: 20, y: 300 });
    console.log("Red moved");
    await moveElement(blueBox, { x: 400, y: 300 });
    console.log("Blue moved");
    await moveElement(greenBox, { x: 400, y: 20 });
    console.log("Green moved");
  } catch (error) {
    console.log(error);
  }
}

translateOneByOne();

function translateAllAtOnce() {
  Promise.all([
    moveElement(redBox, { x: 20, y: 300 }),
    moveElement(blueBox, { x: 400, y: 300 }),
    moveElement(greenBox, { x: 400, y: 20 }),
  ]).then(() => {
    console.log("Red, Blue, and Green moved at the same time");
  });
}

// translateAllAtOnce();
