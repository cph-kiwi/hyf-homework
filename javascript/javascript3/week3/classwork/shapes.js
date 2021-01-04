class Shape {
  constructor(name) {
    this.name = name;
  }
  Area() {
    return 0;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("Square");
    this.sideLength = sideLength;
  }
  Area() {
    return super.Area() + this.sideLength * this.sideLength;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  Area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(sideLength) {
    super("Triangle");
    this.sideLength = sideLength;
  }
  Area() {
    return 0.5 * this.sideLength * this.sideLength;
  }
}

const mySquare = new Square(4); //16
const myTriangle = new Triangle(4); //8
const myTriangle2 = new Triangle(4); //8

let shapes = [];
shapes.push(mySquare);
shapes.push(myTriangle);
shapes.push(myTriangle2);

let sumAreas = 0;
shapes.forEach((shape) => (sumAreas += shape.Area()));
shapes.forEach((shape) => console.log(shape.name));
console.log(sumAreas);
