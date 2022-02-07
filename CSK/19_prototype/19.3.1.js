function Person(name) {
  this.name = name;
}

const person = new Person('choi');
console.log(person.constructor); // => Person 생성자 함수를 가리킨다
console.log(Person.prototype === person.__proto__); // => true
//person 인스턴스는 __proto__ 접근자로 자신의 프로토타입인 Person 의 prototype에 접근 가능하다