const bodyElement = document.querySelector("body");
const buttonElement = document.querySelector("#button");
const canvas = document.createElement("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 200;

const context = canvas.getContext("2d");

class Painter {
  constructor(canvas) {
    this.coord = { x: 0, y: 0 };
    this.paint = false;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
  }

  startPainting(event) {
    this.paint = true;
    this.getPosition(event);

    this.id = setInterval(() => {
      const x = this.coord.x;
      const y = this.coord.y;
      const r = getRandomNumber(5, 60);
      const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
      const newCircle = new Circle(x, y, r, 0, 2 * Math.PI, color);
      newCircle.draw();
    }, 100);
  }

  stopPainting() {
    this.paint = false;
    clearInterval(this.id);
  }

  getPosition(event) {
    this.coord.x = event.clientX - this.canvas.offsetLeft;
    this.coord.y = event.clientY - this.canvas.offsetTop;
  }

  curserArt(event) {
    if (!this.paint) return;
    this.context.beginPath();
    this.context.moveTo(this.coord.x, this.coord.y);
    this.getPosition(event);
    this.context.lineTo(this.coord.x, this.coord.y);
  }
}

const painter = new Painter(canvas);

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }

  draw() {
    if (canvas.getContext) {
      const circle = new Path2D();
      circle.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);

      context.fillStyle = this.fillColor;
      context.fill(circle);

      // context.strokeStyle = this.fillColor;
      // context.stroke(circle);
    }
  }
}

// const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
// c1.draw();

// const c2 = new Circle(100, 100, 50, 0, 2 * Math.PI, "#614e55");
// c2.draw();

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createNewCircle() {
  const x = getRandomNumber(50, canvas.width);
  const y = getRandomNumber(50, canvas.height);
  const r = getRandomNumber(5, 60);
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const newCircle = new Circle(x, y, r, 0, 2 * Math.PI, color);
  newCircle.draw();
}

function makeArt() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  setInterval(createNewCircle, 100);
}

bodyElement.appendChild(canvas);

buttonElement.addEventListener("click", () => {
  makeArt();
});

document.addEventListener("mousedown", (event) => {
  painter.startPainting(event);
});
document.addEventListener("mouseup", () => {
  painter.stopPainting();
});

document.addEventListener("mousemove", (event) => {
  painter.curserArt(event);
});
