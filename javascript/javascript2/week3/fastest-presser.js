let game; // interval
let countS = 0; // playerOne
let countL = 0; // playerTwo
const spanS = document.getElementById("count-s"); // playerOneScoreElement
const spanL = document.getElementById("count-l");
const timer = document.getElementById("timer"); // timerInput

const rematch = document.getElementById("button"); // buttonElement
rematch.textContent = "Start game!";
const message = document.getElementById("message");
message.textContent = "Set seconds and start game by clicking on the button.";

function createConfetti(id) {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "my-canvas");
  document.getElementById(id).appendChild(canvas);
  const confetti = new ConfettiGenerator({
    target: "my-canvas",
    width: 300,
    height: 300,
  });
  confetti.render();
}

function removeConfetti() {
  const canvas = document.getElementById("my-canvas");
  if (canvas === null) {
    return;
  }
  canvas.parentNode.removeChild(canvas);
}

function count(e) {
  //updatePlayerScore or onKeyDown
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
    createConfetti("player-s");
    spanS.textContent = `${countS}`;
    spanL.textContent = `${countL}`;
    message.textContent = "S is the winner!";
  } else if (countL > countS) {
    createConfetti("player-l");
    spanS.textContent = `${countS}`;
    spanL.textContent = `${countL}`;
    message.textContent = "L is the winner!";
  } else {
    message.textContent = "Draw! Try a rematch.";
  }
}

function gameEnd() {
  //endGame
  document.removeEventListener("keydown", count);
  clearInterval(game);
  indicateWinner();

  //console.log("Game end");
  countS = 0;
  countL = 0;

  rematch.textContent = "Rematch!";
}

function gameStart() {
  // startGame
  // console.log("Surprise!");
  spanS.textContent = "";
  spanL.textContent = "";

  removeConfetti();

  message.textContent = "Who is the fastest presser?!";

  const gameLength = Number(timer.value);
  if (gameLength === 0 || gameLength === undefined) {
    message.textContent = "Set seconds and start game.";
    return;
  }

  document.addEventListener("keydown", count);

  game = setInterval(() => {
    timer.value = Number(timer.value) - 1;
    if (timer.value === "3") {
      message.textContent = "THREE!!!";
    }
    if (timer.value === "2") {
      message.textContent = "TWO!!!";
    }
    if (timer.value === "1") {
      message.textContent = "ONE!!!";
    }
    if (timer.value === "0") {
      gameEnd();
    }
  }, 1000);
}

rematch.addEventListener("click", gameStart);
