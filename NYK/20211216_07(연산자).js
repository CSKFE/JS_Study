/**
 * 연산자 개념 구분
 * 1. 연산자 : 하나 이상의 표현식을 대상으로 하나의 값을 만드는 것
 * 2. 피연산자 : 값(연산 당하는 주체, 값으로 평가될 수 있는 표현식이어야 함)
 */

// 3. 단항 산술 연산자
var x = 1, result;
result = x++;
console.log(result, x); //1 2
result = ++x;
console.log(result, x); //3 3
result = x--;
console.log(result, x); //3 2
result = --x;
console.log(result, x); //1 1

// 3. 비교 연산자
// NaN은 자신과 일치하지 않는 값이다. 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 isNaN을 사용한다.
console.log(isNaN(NaN)); //true
console.log(isNaN(10)); //false
console.log(isNaN(1 + NaN)); //true

//5. 논리 연산자
// 논리 부정(!)연산자는 언제나 불리언 값을 반환한다.
// 논리합(||) 또는 논리곱(&&) 표현식의 평가 결과는 불리언 값이 아닐 수 있다.

//9. 지수 연산자
// ES7에서 도입된 지수 연산자는 좌항의 피연산자를 밑으로, 우항의 피연산자를 지수로 거듭제곱하여 숫자 값을 반환 한다.
console.log(2 ** 3); //8