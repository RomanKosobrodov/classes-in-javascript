class Shape {
  constructor(x, y, name = "shape") {
    this.x = x;
    this.y = y;
    this.name = name;
  }
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(x, y, radius, name = "circle") {
    super(x, y, name);
    this.radius = radius;
  }
  area() {
    return 3.1415926535 * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(x, y, w, h, name = "rectangle") {
    super(x, y, name);
    this.w = w;
    this.h = h;
  }
  area() {
    return this.w * this.h;
  }
}

class Square extends Rectangle {
  constructor(x, y, a, name = "square") {
    super(x, y, a, a, name);
  }
}

var shape = new Shape(0, 0, "shape-0");
var circle = new Circle(1, 3, 2, "circle-0");
var rectangle = new Rectangle(-1, -1, 2, 1, "rect");
var square = new Square(5, 4, 2, "square");

var shapes = [shape, circle, rectangle, square];

shapes.forEach((element) => {
  console.log(element.name);
});

shapes.forEach((element) => {
  console.log(element.area());
});
