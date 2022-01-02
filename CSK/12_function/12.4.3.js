/* 함수 호이스팅 */

console.dir(add); // [Function add]
console.dir(sub); // undefined 

console.log(add(1,2)); // 3
console.log(sub(1,2)); // error sub is not a function

function add(x,y){
  return x + y;
}

var sub = function (x,y){
  return y - x;
}

// 함수선언문은 런타임 이전에 선언 및 함수를 가리키는 식별자 생성 및 할당까지 된다
// 함수선언문 이전에 얼마든 호출과 참조가 가능하다
// 이를 함수호이스팅이라고한다
// 그러나 함수 표현식은 변수호이스팅이 먼저 일어나게된다
// 그러므로 함수 표현식은 선언 이후에만 사용이 가능하다.
// 그렇기때문에 함수선언문보다는 함수표현식의 사용을 권한다.