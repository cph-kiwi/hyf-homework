class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

const circleOne = new Circle(3);
console.log("circleOne", "diameter", circleOne.getDiameter());
console.log("circleOne", "circumference", circleOne.getCircumference());
console.log("circleOne", "area", circleOne.getArea());

const circleTwo = new Circle(4);
console.log("circleTwo", "diameter", circleTwo.getDiameter());
console.log("circleTwo", "circumference", circleTwo.getCircumference());
console.log("circleTwo", "area", circleTwo.getArea());

const circleThree = new Circle(5);
console.log("circleThree", "diameter", circleThree.getDiameter());
console.log("circleThree", "circumference", circleThree.getCircumference());
console.log("circleThree", "area", circleThree.getArea());
