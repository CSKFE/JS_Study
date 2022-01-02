/* 스코프의 종류 */
// 스코프는 전역스코프(global scope)
// 지역 스코프(local scope) 로 나뉜다

// 전역 스코프는 말 그대로 전역에 선언된 변수가 갖는 스코프
// 지역 스코프는 자신이 속한 함수 또는 코드블럭 내에 속한 스코프를 의미한다
// 전역스코프는 어디서든 참조할 수 있다
// 지역스코프는 자신이 속한 지역 혹은 지역스코프의 하위스코프에서 참조할 수 있다.


var x = 'global x';
var y = 'global y'

function foo() {
  var x = 'foo local x';

  function bar() {
    var z = 'bar local z';

    console.log(x); // => 'foo local x'
  }

  bar();
}

foo();

console.log(x); // => global x
console.log(y); // => global y
console.log(z); // => reference error z is not defined

// z 는 bar 에서만 참조할 수 있는 지역스코프를 가졌다
// bar 내부의 x 는 bar 의 상위스코프인 foo의 x 를 참조한다
// global로 선언된 x,y 는 전역스코프를 가진다.