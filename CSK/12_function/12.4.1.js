/* 함수 선언문 */

function add(x ,y) {
  return x + y;
}

console.log(add(1, 2));

// 함수 선언문은 리터럴과 동일한 형태, 리터럴은 이름을 생략가능하지만 함수선언문은 이름을 생략할 수 없다.

// function(x, y) {
//   return x + y;
// } 
// => error

// 함수선언문은 표현식이 아닌 문이다.
// 함수선언문이 표현식인 문이라면
// 개발자도구에선 undefind값 대신 표현식이 평가되어 생성된 함수가 출력되어야한다.


var add = function add(x ,y) {
  return x + y;
};
console.log(add(1,2));

// 표현식이 아닌 문은 변수에 할당할 수 없다.
// 함수도 표현식이 아닌 문이다 하지만 변수에 할당할 수 있다.
// 이는 실제로 할당되는것이 아닌 할당되는 것 처럼 보인다.

// 자바스크립트 에서 함수 선언문은 중의적인 의미를 가진다
// 자바스크립트 엔진이 함수를 선언할때 함수리터럴은 표현식인 문 으로 해석할때가 있고
// 함수 선언문은 표현식이 아닌 문으로 해석할 수 있다
// 하지만 내부동작에서는 차이가 있다

function foo() {
  console.log(foo);
}
foo();
// => [Function foo]

(function bar() {console.log(bar);});
bar();
// => not defined

// 위의 foo는 함수 선언문으로 해석됨
// 하지만 () 그룹연산자 안의 값은 반드시 평가될 수 있는 값이어야 하므로 bar는 함수 리터럴 표현식으로 해석됨
// 함수 선언문은 함수명을 반드시 사용해야하고 함수명은 함수내부에서만 사용할 수 있다
// 위의 bar의 경우 함수 밖에서는 bar라는 함수명을 사용할 수 없기때문에 식별자가 없는거나 마찬가지므로 사용할 수 없다

//위의 foo는 사실 사용할 수 없어야한다 foo라는 식별자는 밖에서 사용할 수 없기때문이다
//이는 자바스크립트 엔진이 암묵적으로 foo 라는 함수를 식별해 사용할 수 있는 식별자를 만들고 거기에 함수 객체를 할당하기 때문이다.

var foo = function foo() {
  console.log('foo');
}
// 위의 경우는 사실 함수명으로 호출된것이 아닌 함수를 식별할 수 있는 식별자(foo)를 가지고 호출한것이다.
// 자바스크립트에서 함수선언식을 사실 함수 표현식으로 반환하여 생성된다
// 하지만 함수선언문과 함수표현식의 동작이 완전 일치하지는 않다

