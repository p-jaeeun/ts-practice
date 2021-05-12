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
