let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj)); // null 
// 프로토타입이 null인 객체는 프로토타입 체인의 종점에 위치한다
// 그러므로 Obejct.prototype을 상속받지 못한다


// 첫번째 인자에 상속받을 프로토타입 객체를, 두번째 인자에 키와 벨류 그리고 디스크립터 프로퍼티
obj = Object.create(Object.prototype, {
  x : {value : 1, enumerable : true, configurable : true, writable :true}
});

// 위의 코드는  obj = {x : 1} 이것과 동일하다

console.log(Object.getPrototypeOf(obj));
console.log(obj.x); // 1


const myProto = {x : 10};
obj = Object.create(myProto);
console.log(Object.getPrototypeOf(obj) === myProto); // true

function Person(name) {
  this.name = name;
}

obj = Object.create(Person.prototype);

//생성자 함수도 new 연산자 없이 인스턴스 생성할 수 있다.
console.log(obj.constructor === Person); // true 
console.log(Object.getPrototypeOf(obj) === Person.prototype); // true