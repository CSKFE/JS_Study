// 불리언(boolean) 타입의 값은 논리적 참, 거짓을 나타내는 true와 false 뿐이다.
var foo = true;
var bar = false;

// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
console.log(typeof foo); // boolean
console.log(typeof bar); // boolean


// undefined 타입의 값은 undefined가 유일하다. 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가진다.
var foo;
console.log(foo); // undefined

// null 타입의 값은 null이 유일하다. 자바스크립트는 대소문자를 구별(case-sensitive)하므로 null은 Null, NULL등과 다르다.
var foo = 'Lee';
foo = null;  // 참조 정보가 제거됨

// 타입을  반환하는 typeof 연산자로 null 값을 연산해 보면 object가 나온다. 이는 자바스크립트의 설계상의 오류이다.
var foo = null;
console.log(typeof foo); // object

// 따라서 null 타입을 확인할 때 typeof 연산자를 사용하면 안되고 일치 연산자(===)를 사용하여야 한다.
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true

// 심볼(symbol)은 ES6에서 새롭게 추가된 7번째 타입으로 변경 불가능한 원시 타입의 값이다.
// 심볼 key는 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value