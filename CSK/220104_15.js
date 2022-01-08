/* let과 const */

//먼저 var 키워드의 문제점을 살펴보자
// var 키워드의 문제점
// 중복 선언이 가능하다
var x = 10;
var y = 100;

var x = 1;
var y;

//console.log(x); // => 1
//console.log(y); // => 100

// var 키워드는 중복선언이 가능하며 초기화를 하지않는경우 무시한다

// 호이스팅에 의해서 프로그래밍 패러다임에 맞지않는 동작을 일으킨다
// 함수레벨 스코프를 가졌기때문에 함수 외에 선언된 (for, if 문 포함) var 키워드의 변수는 전역변수가 된다


/* let */
// let 키워드는 중복선언을 허용하지않는다

let z = 1;
// let z = 2;

//console.log(z); // => 이미 z 라는 변수가 선언되었기때문에 문법에러발생

// let 키워드는 블록레벨 스코프를 갖는다

let foo = 1; // 전역변수
{
  let foo = 2; // {} 코드블록 내의 지역변수
 // console.log(foo); // => 2
}
//console.log(foo); // => 1


let func = 1;

function bar() {
  let func = 2;

  for(let func = 0; func < 3; func++) {
    console.log(func); // => 0 ,1 ,2
  }

  console.log(func); // => 2
}

bar();
console.log(func); // => 1



// 호이스팅이 일어나지 않는것처럼 동작한다
// var 키워드로 선언할 경우 런타임 이전에 선언과 undefined 초기화가 이루어지고
// 런타임 시점에 할당문에서 비로소 할당이 이루어진다


// let 키워드의 경우 런타임 이전에 선언이 되지만 undefined로 초기화가 이루어지지않고, 참조도 불가능하다
// 비로소 let키워드로 선언된 변수가 선언문에 도달했을때 초기화가 이루어지고 할당문에 도달했을때 할당이 이루어지며 참조가 가능해진다
// 이 구간의 사이를 일시적 사각지대 라고 한다
// let 키워드는 window객체의 프로퍼티로 존재하지않는다


/* const */
// const 키워드는 let 키워드와 비슷하게 동작한다
// const 키워드는 상수를 의미한다. 다시말해 재할당을 할 수 없다
// const 키워드는 반드시 선언과 동시에 할당을 해야한다
// const 키워드를 사용하는 경우는 값이 거의 바뀌지 않는 고정된 값을 사용할때 유용하다
// const 키워드를 사용해 만든 변수는 대문자로 상수임을 나타내주는게 가독성에 유리하다
// const 키워드에 객체를 할당했을때 프로퍼티를 변경할 수 있다
// const 키워드는 불변을 의미하는것이 아닌 재할당이 금지된것이다


const obj = {
  name : 'choi'
};

console.log(obj.name); // => choi

obj.name = 'lee';

console.log(obj.name); // => lee
