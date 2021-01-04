const bodyElement = document.querySelector("body");
const canvas = document.createElement("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 100;

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
      const context = canvas.getContext("2d");

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
  setInterval(createNewCircle, 100);
}
makeArt();

bodyElement.appendChild(canvas);
