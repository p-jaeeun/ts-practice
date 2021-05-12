// 함수
// 인자 타입 설정안하면 default any로 설정 , 반환값 타입도 지정할 수 있음
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);

// 아무것도 반환하지 않을 때 :void(default)

function returnNothing() {
  console.log("blahblah");
}
returnNothing();

// interface :: class 또는 객체의 타입을 지정할 때 사용

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 5);
const Shapes: Shape[] = [circle, rectangle];

Shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// 객체의 타입 지정하기
type Person = {
  name: string;
  age?: number; // ? : age 값이 있을수도 없을수도 있음
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김이름",
  age: 20,
};

const expert: Developer = {
  name: "김개발",
  age: 20,
  skills: ["javascripts", "react"],
};

type People = Person[];

const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";

const oneColor: Color = "yellow";

//
