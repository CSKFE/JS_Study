/* 재귀함수 */
// 재귀함수란 자기 자신 내부에서 자신을 호출하는 함수를 의미한다

//재귀함수를 이용한 팩토리얼
function factorial(n) {
  if(n <= 1) {
    return 1;
  }

  return n * factorial(n-1);
}

console.log(factorial(5));

// 재귀함수를 사용할때는 반드시 탈출할 조건을 써야한다
// 탈출할 조건을 만들지 않을경우 무한루프에 빠지기때문이다.

var facto = function foo(n) {
  if(n <= 1) return 1;
  return n * facto(n-1);
}
console.log(facto(5));

// 재귀함수 함수표현식으로 정의할 경우 식별자로 재귀호출해야한다.