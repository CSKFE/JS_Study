const person = new Object();
person.name = 'Choi';
person.sayHello = function() {
  console.log(`hello ${this.name}`);
};
// Object 생성자 함수를 이용한 인스턴스 생성과 동적 프로퍼티 추가
console.log(person);
console.log(person.name);
person.sayHello();


const str = new String('hello');
console.log(str);

const num = new Number(123);
console.log(num);

const bool = new Boolean(true);
console.log(bool);

const func = new Function('x','return x*x');
console.log(func(2));

const reg = new RegExp(/ab+c/i);
console.log(reg);

const date = new Date();
console.log(date);

//여러가지 빌트인 생성자 함수를 통한 다양한 데이터형태를 인스턴스 할 수 있다.