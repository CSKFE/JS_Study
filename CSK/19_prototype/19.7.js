function Person(name) {
  this.name = name;
}

const obj = new Person('choi');

console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
// Person 생성자 함수의 prototype의 프로토타입은 Object.prototype이다
// obj는 Person의 인스턴스이므로 obj는 Object.prototype을 상속받는다.
