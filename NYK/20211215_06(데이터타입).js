/** 자바스크립트(ES60의 데이터 타입)
 * 원시 타입: 숫자, 문자열, 불리언, undefined, null, 심벌
 * 객체 타입 : 객체 ,함수 , 배열 등
 */

//1. 숫자열 타입
//숫자 타입은 모두 실수로 처리된다. 자바스크립트에서는 정수와 실수의 타입을 구분하지 않는다.
console.log(1 === 1.0); //ture

//숫자 타입은 세가지 특별한 값도 표현할 수 있다.
console.log(10 / 0); //Infinity : 양의 무한대
console.log(10 / -0); //-Infinity : 음의 무한대
console.log(1 * 'String'); //NaN: 산술 연산 불가

//2. 문자열 타입
// 자바스크립트의 문자열 타입은 원시 타입이다 = 변경 불가능한 값이다.
// ES6부터 나온 백틱을 사용하면 표현식 삽입을 통해 문자열을 간단히 삽입할 수 있다. (`문자열 ${함수} 문자열`) 그리고 템플릿 리터럴(이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용, 모든 공백도 있는 그대로 적용)된다.

// 5. undefined 타입은 개발자가 이도적으로 할당하기 위한 값이 아니라, 자바스크립트 엔진이 변수를 초기화 할 때 사용하는 값이다.

// 6. null 타입은 개발자가 의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다. = 언제든지 가비지 콜렉션 수행당할 수 있음
// 또는 조건에 부합하는 요소를 검색할 수 없는 경우 에러대신 null을 반환한다.

//7. 심벌타입은 ES6에서 추가된 값으로 다른 값과 중복되지 않는 유일무이한 값이다. Symbol 함수를 호출해 생성한다.
var key = Symbol('key');
console.log(typeof key);

var obj = [];

obj[key] = 'value';
console.log(obj[key]);

// 궁금했던 문제 해결
// 자바스크립트의 변수에는 어떤 데이터 타입의 값이라도 자유롭게 할당할 수 있으므로, 기본적으로 변수는 타입을 갖지 않는다.
// 하지만 값은 타입을 갖는다. 현재 변수에 할당되어 있는 값에 의해 변수의 타입이 동적으로 결정되는 것이다.