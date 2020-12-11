let interval;
let playerOne = 0;
let playerTwo = 0;
const playerOneScoreElement = document.getElementById("count-s");
const playerOneScoreElement = document.getElementById("count-l");
const timerInput = document.getElementById("timer");

const buttonElement = document.getElementById("button");
buttonElement.textContent = "Start game!";
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

function updatePlayerScore(e) {
  if (e.key === "s") {
    playerOne++;
  } else if (e.key === "l") {
    playerTwo++;
  } else {
    console.log("Wrong key");
  }
  //console.log({ playerOne, playerTwo });
}

function indicateWinner() {
  if (playerOne > playerTwo) {
    createConfetti("player-s");
    playerOneScoreElement.textContent = `${playerOne}`;
    playerOneScoreElement.textContent = `${playerTwo}`;
    message.textContent = "S is the winner!";
  } else if (playerTwo > playerOne) {
    createConfetti("player-l");
    playerOneScoreElement.textContent = `${playerOne}`;
    playerOneScoreElement.textContent = `${playerTwo}`;
    message.textContent = "L is the winner!";
  } else {
    message.textContent = "Draw! Try a rematch.";
  }
}

function endGame() {
  document.removeEventListener("keydown", updatePlayerScore);
  clearInterval(interval);
  indicateWinner();

  //console.log("Game end");
  playerOne = 0;
  playerTwo = 0;

  buttonElement.textContent = "Rematch!";
}

function startGame() {
  playerOneScoreElement.textContent = "";
  playerOneScoreElement.textContent = "";

  removeConfetti();

  message.textContent = "Who is the fastest presser?!";

  const gameLength = Number(timerInput.value);
  if (gameLength === 0 || gameLength === undefined) {
    message.textContent = "Set seconds and start game.";
    return;
  }

  document.addEventListener("keydown", updatePlayerScore);

  interval = setInterval(() => {
    timerInput.value = Number(timerInput.value) - 1;
    if (timerInput.value === "3") {
      message.textContent = "THREE!!!";
    }
    if (timerInput.value === "2") {
      message.textContent = "TWO!!!";
    }
    if (timerInput.value === "1") {
      message.textContent = "ONE!!!";
    }
    if (timerInput.value === "0") {
      endGame();
    }
  }, 1000);
}

buttonElement.addEventListener("click", startGame);
