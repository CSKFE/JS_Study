const Person = (function() {
  function Person(name) {
    this.name = name;
  }
    return Person;
}());

const parent = {
  //constructor: Person, // constructor를 지정하여 인스턴스와 생성자 함수간의 연결
  sayHello () {
    console.log(`${this.name} 하이`);
  }
};

const me = new Person('choi');

console.log(Person.prototype); // 빈 객체, 교체된 prototype을 가리키지 않음.

// 인스턴스에서 프로토타입의 교체
Object.setPrototypeOf(me, parent);

me.sayHello();
