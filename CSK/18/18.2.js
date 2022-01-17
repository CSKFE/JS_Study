function multiply(x, y) {
  const iterator = arguments[Symbol.iterator]();
  
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());


  return x * y;
}
// 함수의 argument 프로퍼티의 이터레이터 프로퍼티
multiply(1,2,3,4);

//argumet 객체는 유사배열 객체로 length값을 가져 for문으로 순회 할 수 있다
// 기변인자의 갯수를 구하는 함수로 사용할 수 있다

function sum() {
  let num = 0;
  
  for(let i = 0; i < arguments.length; i ++) {
    num += arguments[i];
  }

  return num;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5));


function sum2() {
  const array = Array.prototype.slice.call(arguments);
  
  return array.reduce(function(pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(`sum2 ${sum2(1,2,3)}`);
console.log(`sum2 ${sum2(1,2,3,4,5)}`);

// Rest 파라미터

function sum3(...arg) {
  return arg.reduce((pre, cur) => pre + cur ,0);
}

console.log(`sum3 ${sum3(1,2,3)}`);