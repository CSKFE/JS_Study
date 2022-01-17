function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.getDiameter());
// 생성자 함수 Circle은 new 연산자로 호출할 수 있기때문에 constructor다


function foo() {}
const bar = new foo();
console.log(bar);
// 함수 선언문으로 정의한 함수 foo도 constructor이므로 new 연산자와 함께 호출할 수 있다


const obj = {
  x(y) {
    return y;
  },
};

//new obj.x(2);
// 일반 객체 내부에 정의된 메서드(ES6축약표현)는 non-constructor 이므로 new 연산자와 호출이 불가능하다

const arr = () => {};

//new arr();
// 화살표함수 역시 non-constructor 다


/** new 연산자 **/

function Test(x) {
  if(!new.target) {
    return new Test(x);
  }
  this.x = x;
  this.rt = function() {
    return x * 2;
  }
}

const test = Test(2);
console.log(test.rt());

// new.target을 사용하여 new 연산자 없이 호출된 생성자 함수를 new 연산자와 재귀호출하는 로직
