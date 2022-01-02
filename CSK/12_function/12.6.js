/* 참조에 의한 전달과 외부상태의 변경 */
// 원시값은 값에의한 전달 (pass by value)
// 참조값은 참조에 의한 전달(pass by reference)
// 함수 내부의 매개변수도 일반 변수와같이 동작한다 그러므로 어떤 데이터타입이던 호출될 수 있다
// 그렇다면 함수 내부로 전달된 매개변수도 전달받을때 값에 의한 호출(call by value), 참조에 의한 호출(call by reference)이라고 할 수 있다

function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'choi';
}

var num = 100;
var person = {name : 'Lee'};

console.log(num); //=>100
console.log(person); // => {name : Lee}

changeVal(num, person);

console.log(num); // => 100 
// 식별자 num에서 식별하는 값은 원시값이기때문에 값이 바뀌지않는다(call by value)

console.log(person); // => name : choi 
// 식별자 person 은 참조값이기때문에 원래의 데이터가 훼손된다.


// 이처럼 객체는 참조에의한 전달이기때문에 함수에서 원본을 훼손시킬 위험이 있으며 상태변경을 찾기가 어렵다
// 이러한 문제의 해결방법으로는 객체를 불변객체로 만들어 원본값을 훼손시키지않고 새로운 객체를 만들어 재할당(deep copy)을 하는 방법이 있다.
// 이러한 경우에서 외부의 상태를 변경시키지 않는 함수를 순수함수 라고 하며 이는 함수형프로그래밍의 근간이 된다.
