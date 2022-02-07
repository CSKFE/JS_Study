const Person = (function() {
  function Person(name) {
    this.name = name;
  }
    
  Person.prototype = {
    //constructor : Person, // constructor를 정의하여 생성자 함수와 인스턴스간의 연결을 설정할 수 있다.
    // 이때 me.constructor === Object 는 false, Person이 true로 바뀌게된다.
    sayHello() {
      console.log(`${this.name} 하이`);
    }
  }
    return Person;
}());

const me = new Person('choi');

console.log(Person.prototype); // 교체된 prototype - sayHello()를 가리킴

// 프로토타입의 prototype 프로퍼티로 프로토타입 교체
console.log(me.constructor === Person); // false
// 인스턴스의 프로로타입을 교체했다.
// 이때 교체된 프로토타입은 객체 리터럴이므로 객체 리터럴은 constructor를 갖지않는다
// me 와 Person 의 연결이 파괴됐다


// 프로토타입 체인상에 Object.prototype이 있기때문에 true
console.log(me.constructor === Object); // true