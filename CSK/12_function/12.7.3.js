/* 콜백함수 */

function foo(n) {
  for(var i = 0; i < n; i++) {
    console.log(i);
  }
}

//console.log(foo(5));

// 위의 예제는 n만큼 0 부터 출력하는 함수이다
// 위의 예제에서는 console.log(i) 의 의존성이 강하여 다른 일을 처리 할 수 없다.
// 위의 예제를 개선하기위해서는 공통적인 로직은 놔두고 조건에따라 다른 일을 처리하는 함수를 합성하여 개선할 수 있다

function reapeat(n ,f) {
  for(var i = 0; i < n; i++) {
    f(i);
  }
}

function logAll(n) {
  console.log(n);
}

reapeat(5, logAll);

function logOdd(n) {
  if(n % 2) console.log(n);
}

reapeat(5, logOdd);

// reapeat 함수에서 경우에따라 바뀌는 값을 f라는 인자로 전달받는 함수로 추상화했다
// 이처럼 함수 내부에서 함수를 전달받아 실행하는 것을 콜백함수라고한다
// 인자로 전달되는 함수를 고차함수 라고 한다
// 고차함수는 콜백함수를 자신의 일부분으로 합성한다.