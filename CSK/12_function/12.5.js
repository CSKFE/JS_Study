/* 함수 호출 */

//함수의 매개변수는 갯수 제한이 없다
// 매개변수의 갯수와 인자값이 달라도 에러를 발생시키지 않는다
// 인수는 반드시 평가될 수 있는 표현식 이어야 한다.

function add(x,y) {
  return x + y;
}

console.log(add(1,2,3)); // => 3

console.log(add(1)) // => NaN

// 하지만 인수가 매개변수보다 적을 경우 에러를 발생시킨다
// 위의 예제에서 x = 1 이지만 y는 undefined 이기때문에 NaN을 반환했다.

//es6에 도입된 매개변수 기본값 설정

function calc(x = 0, y = 0, z = 0) {
  return x + y + z;
}

console.log(calc(1,2,3)); // => 6
console.log(calc(1,2)); // => 3
console.log(calc(1)); // => 1
console.log(calc(0)); // => 0