// 숫자 3타입의 세가지 특별한 값
var pInf = 10 / 0;  // 양의 무한대
console.log(pInf);  // Infinity

var nInf = 10 / -0; // 음의 무한대
console.log(nInf);  // -Infinity

var nan = 1 * 'string'; // 산술 연산 불가
console.log(nan);       // NaN


// 자바스크립트는 대소문자를 구별함: NaN,NAN,nan과 같이 표현하면 에러가 발생 (식별자로 판단함)