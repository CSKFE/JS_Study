const obj = {name : 'Choi'};

console.log(Object.isExtensible(obj)); // => true

Object.preventExtensions(obj);

obj.age = '28'; //프로퍼티 추가가 금지되어 무시된다(스트릭트모드에서는 에러)

Object.defineProperty(obj, 'age', {
  value : '28'
});
// => Cannot define property age, object is not extensible

delete obj.name;

console.log(obj); // => {} 삭제는 가능


/* 밀봉 */
const o = {name : 'Lee'};

console.log(Object.isSealed(o)); // => false

Object.seal(o);

console.log(Object.isSealed(o)); // => true

o.name = 'Choi';

console.log(o.name); // => Choi 값의 갱신은 가능하다.

/* 동결 */

const b = {age : '28'};

console.log(Object.isFrozen(b)); // => false

Object.freeze(b);
console.log(Object.isFrozen(b)); // => true

// 위의 상태에서는 읽기만 가능하다