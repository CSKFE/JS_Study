//console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// 위의 결과를 살펴보면 __proto__  접근자 프로퍼티는 getter/ setter 형태의 접근자 프로퍼티 인걸 확인할 수 있다
// __proto__ 접근자는 Object.prototype의 접근할 수 있는 접근자 함수다.

// __proto__ 접근자를 호출하여 프로토타입 변경
const person = {name : 'lee'};
const obj = {};

obj.__proto__ = person;
//console.log(obj.name); // => lee
// __proto__ 접근자를 통해 프로토타입을 교체함


//__proto__ 접근자는 객체가 갖고있는것이 아닌 Obejct.prototype에 의해 상속받는것이다
const obj2 = {};
console.log(obj2.hasOwnProperty('__proto__')); // => false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
console.log({}.__proto__ === Object.prototype); // true

// {}.__proto__ 와 Object.prototype 의 프로퍼티는 동일한 프로퍼티 이므로 true
// 이는 모든 객체가 Object.prototype의 __proto__ 프로퍼티는 상속받아 사용할 수 있다

//하지만 __proto__를 코드 내부에서 직접 사용하는것은 권장하지 않는다
// getPrototypeOf / setPrototypeOf 를 사용하자