let interval;
let playerOne = 0;
let playerTwo = 0;
const playerOneScoreElement = document.querySelector("#count-s");
const playerTwoScoreElement = document.querySelector("#count-l");
const timerInput = document.querySelector("#timer");

const buttonElement = document.querySelector("#start");
const message = document.querySelector("#message");

function createConfetti(parent) {
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "my-canvas");
  parent.appendChild(canvas);
  const confetti = new ConfettiGenerator({
    target: "my-canvas",
    width: parent.offsetWidth,
    height: parent.offsetHeight,
  });
  confetti.render();
}

function removeConfetti() {
  const canvas = document.querySelector("#my-canvas");
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
}

function renderPlayerScore() {
  playerOneScoreElement.textContent = `${playerOne}`;
  playerTwoScoreElement.textContent = `${playerTwo}`;
}

function indicateWinner() {
  if (playerOne > playerTwo) {
    createConfetti(document.querySelector("#player-s"));
    message.textContent = "S is the winner!";
  } else if (playerTwo > playerOne) {
    createConfetti(document.querySelector("#player-l"));
    message.textContent = "L is the winner!";
  } else {
    message.textContent = "Draw! Try a rematch.";
  }
}

function endGame() {
  document.removeEventListener("keydown", updatePlayerScore);
  clearInterval(interval);
  indicateWinner();
  renderPlayerScore();

  playerOne = 0;
  playerTwo = 0;

  buttonElement.textContent = "Rematch!";
}

function startGame() {
  playerOneScoreElement.textContent = "";
  playerTwoScoreElement.textContent = "";

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
