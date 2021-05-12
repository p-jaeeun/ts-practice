let count = 0;

count += 1;

// String
const message: string = "hello world";

// Boolean
const done: boolean = false;

// Array
const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

let mightBeUndefined: string | undefined = undefined; // 문자열 또는 undefined인 경우
let nullableNumber: null | number = null; // null 또는 숫자인 경우

let color: "red" | "orange" | "yellow" = "yellow"; // red,orange,yellow 중에서 하나만

color = "orange";
