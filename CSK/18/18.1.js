// 함수는 일급객체이다

// 일급객체 이므로 무명의 리터럴로 선언이 가능하다.
const increase = function(num) {
  return ++num;
};

const decrease = function(num) {
  return --num;
};

// 일급객체이므로 변수나 자료구조(배열,객체)에 저장이 가능하다
const predicate = {increase , decrease};

// 일급객체이므로 함수의 매개변수로 전달할 수 있다.
// 일급객체이므로 반환값으로 사용할 수 있다.(값으로 평가할 수 있다)
function makeCounter(predicate) {
  let num = 0;
  
  return function() {
    num = predicate(num);
    return num;
  };
}


const increaser = makeCounter(predicate.increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(predicate.decrease);
console.log(decreaser());
console.log(decreaser());


function proto() {
}
console.log(Object.getOwnPropertyDescriptors(proto));