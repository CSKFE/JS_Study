const obj = new Object;
console.log(obj.constructor === Object);

let obj2 = {name : 'choi'};

console.log(obj2.constructor === Object);

obj2 = new Object('123123'); // String {'123123'};
console.log(obj2);
obj2 = new Object(123123); // Number {123123}

// 인수가 전달된 경우는 인수를 객체로 변환한다