"use strict";
// 함수
// 인자 타입 설정안하면 default any로 설정 , 반환값 타입도 지정할 수 있음
function sumArray(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
// 아무것도 반환하지 않을 때 :void(default)
function returnNothing() {
  console.log("blahblah");
}
returnNothing();
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const Shapes = [circle, rectangle];
Shapes.forEach((shape) => {
  console.log(shape.getArea());
});
