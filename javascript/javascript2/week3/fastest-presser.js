let game;
let countS = 0;
let countL = 0;
let spanS = document.getElementById("count-s");
let spanL = document.getElementById("count-l");
let timer = document.getElementById("timer");

const confettiS = new ConfettiGenerator({
  target: "my-canvas-s",
  width: 300,
  height: 300,
});
const confettiL = new ConfettiGenerator({
  target: "my-canvas-l",
  width: 300,
  height: 300,
});

function count(e) {
  if (e.key === "s") {
    countS++;
  } else if (e.key === "l") {
    countL++;
  } else {
    console.log("Wrong key");
  }
  //console.log({ countS, countL });
}

function indicateWinner() {
  if (countS > countL) {
    confettiS.render();
  } else if (countL > countS) {
    confettiL.render();
  } else {
    console.log("No winner");
  }
}

function gameStart() {
  spanS.textContent = "";
  spanL.textContent = "";

  const gameLength = Number(input.value) * 1000;

  document.addEventListener("keydown", count);

  game = setTimeout(() => {
    document.removeEventListener("keydown", count);
    spanS.textContent = `${countS}`;
    spanL.textContent = `${countL}`;

    indicateWinner();

    //console.log("Game end");
    countS = 0;
    countL = 0;
    timer.textContent = 0; // PROBLEM
  }, gameLength);
}

const startButton = document.querySelector("button");
startButton.addEventListener("click", gameStart);

const input = document.querySelector("input");
