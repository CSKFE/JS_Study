/* 타입변환과 단축평가 */
// 타입변환?
// 개발자의 의도에따라 값의 타입을 변경할수있다.
// 의도적으로 값의 타입을 변경시키는것은 명시적 타입변환(타입 캐스팅)이라고 한다.

var x = 10;

//명시적인 타입변환
// 숫자 -> 문자
var str = x.toString();
console.log(typeof str, str);

console.log(typeof x, x)//변수 x의 값이 변경된것은 아니다.


//개발자의 의도와 상관없이 타입이 변경되는 경우(자바스크립트 엔진에 의해 암묵적을 변환)
//위의 경우를 암묵적 타입변환(타입 강제 변환) 이라고 한다

var y = 10;

var str1 = x + '';
console.log(typeof str1, str1); //string
//위의 경우 역시 변수 y의 값이 변경된것은 아니다.


//타입변환이란 원시값을 바꾸는것이 아닌 원시값을 이용해 다른 타입의 새로운 원시값을 생성하는것이다.

//문자열 타입으로 변환
1+'2' // '12'
// + 연산자는 피연산자중 하나 이상의 값이 문자열일때 문자열 연결 연산자로 동작한다.


/* 숫자 타입으로 변환 */
1 - '1' // 0
1 * '10' // 10
1/ 'one' // NaN

//위의 산술연산자의 피연산자 값을 암묵적으로 숫자형으로 변환하는데 이때 숫자형으로 변환할수없는 값일때 NaN을 반환한다.

'1' > 0 // true
// 비교 연산자 표현식을 평가할때에도 숫자타입이 아닌 피연산자를 숫자타입으로 암묵적으로 변환한다.

/* 불리언 타입으로 변환 */
if('') console.log(x);

//if, for같은 제어문또는 삼항연산자의 조건은 true/false 이어야한다.
// 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적타입변환한다.
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy(참으로 평가되는 값) / Falsy(거짓으로 평가되는 값) 값으로 구분한다
// Truthy
if(true) console.log('2');
if('str') console.log('4');

//Falsy
// false, undefined, null ,0/-0, NaN, 빈 문자열('')
//이 외의 값은 모두 Truthy한 값이다.

/* 명시적 타입 변환 */

/* 문자열 타입으로 변환 */

// String 생성자를 new 연산자 없이 호출
// Object.prototype.toString() 메서드 활용
// 문자열 연결 연산자 (+) 이용

/* 숫자 타입으로 변환 */

//Number 생성자를 new 연산자 없이 호출
//parseInt, parseFloat 함수를 사용(문자열 -> 숫자 타입으로 가능)
//+ 단항 산술 연산자를 이용
//' * ' 산술 연산자를 이용

/* 불리언 타입으로 변환 */
//Boolean 생성자 함수를 new 연산자 없이 호출
// '!' 부정 논리 연산자를 두 번 사용

/* 단축 평가 */
// && 논리곱 연산자

'cat' && 'dog' // 'dog'
//논리곱 연산자는 두 개의 피연산자가 모두 true일때 true를 반환한다.
//논리곱 연산자는 좌항 > 우항 으로 평가된다.
//첫번째 피연산자 'cat'은 Truthy 값이므로 true다
//논리곱 연산자는 논리 연산의 결과를 결정하는 두번째 피연산자에 의해 값이 평가되는데 'dog'역시 Truthy한 값이므로 'dog'가 반환된다.

//|| 논리합 연산자
// 논리합 연산자는 두 개의 피연산자 중 둘 중 하나의 값이 true일때 true를 반환한다.
'cat' || 'dog' // 'cat'

//논리연산의 결과를 결정하는 피연산자를 타입변환하지 않고 그대로 반환하는데 이것을 단축평가 라고한다.
//단축평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는것을 의미한다.

/* 단축평가는 객체를 가리키기를 기대하는 변수가 null / undefined 가 아닌지 확인하고 프로퍼티를 참조할때 유용하다 */

var elem = null;
var value = elem && elem.value; // null

/* 함수 매개변수에 기본값을 설정할때 유용하다 */
function getStringLength(str) {
  str = str || '';
  return str.length;
}

getStringLength(); // 0
getStringLength('hi') // 2

/* ES6 */

function getStringLength2(str = '') {
  return str.length;
}
getStringLength2(); // 0 
getStringLength2('hi'); // 2 







/* 옵셔녈 체이닝 연산자 (?.) */
// 옵셔널 체이닝 연산자 ?.
// 좌항의 피연산자가 null/undefined인 경우 undefined를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var elem = null;
//elem이 null 또는 undefined면 undefined를 반환, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
var value = elem?.value;
console.log(value); // undefined 




var elem2 = null;

//elem2 가 Falsy한 값이면 elem2로 평가되고, elem2가 Truthy한 값이면 elem2.value로 평가된다
var value2 = elem2 && elem2.value;
console.log(value2);

//&&논리연산자는 좌항피연산자가 false로 평가되는 Falsy한 값들(null, undefined, false, '', 0, -0, NaN)이면 좌항 피연산자를 그대로 반환한다.
// 때때로 '', 0 은 객체로평가될 때도 있다.

//하지만 옵셔널 체이닝 연산자는 좌항 피연산자가 false인 Falsy한 값이라도 null/undefined가 아니면 우항의 프로퍼티 참조를 이어간다

var str2 = '';
//좌항 피연산자가 Falsy한 값이라도 null/undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var length = str2?.length;
console.log(length);


/* null 병합 연산자 (??) */
// null 병합 연산자 (??)
// 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고 그렇지 않으면 좌항의 피연산자를 반환한다.

//변수 기본값 설정
var foo = null ?? 'default string';
console.log(foo); // 'default string'

//Falsy 값인 0이나 '' 도 기본값으로 유효하다면 ||(논리합)연산자는 우항의 피연산자 값을 반환하기때문에 아래와같은 결과가 나온다
var foo2 = '' || 'default string';
console.log(foo2); // 'default string'


//null 병합 연산자도 좌항의 값이 Falsy한 값중 null 이나 undefined가 아니라면 좌항의 피연산자 값을 그대로 반환한다.
var foo3 = '' ?? 'default string';
console.log(foo3); // '';