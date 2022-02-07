const myProto = {
  y: 10
};

const obj = {
  x: 20,
  __proto__ : myProto
};

console.log(obj.x, obj.y);

// 객체 리터럴 내부에서 __proto__ 를 이용한 직접상속(ES8)