const obj = {};

Object.defineProperty(obj, 'firstName', {
  value : 'SunKyu',
  writable : 'true',
  enumerable : 'true',
  configurable : 'true'
});

Object.defineProperty(obj, 'lastName', {
  value : 'Choi',
});

console.log(Object.getOwnPropertyDescriptor(obj ,'firstName'));
console.log(Object.getOwnPropertyDescriptor(obj ,'lastName'));

//데이터 프로퍼티를 정의할 수 있으며 프로퍼티 어트리뷰트도 정의 가능하다


Object.definePropertiy(obj , 'fullName', {
  get () {
    return `${this.firstName} ${this.lastName}`;
  },
  set (name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable : true,
  configurable : true
});

//접근자 프로퍼티를 정의할 수 있으며 프로퍼티 어트리뷰트도 마찬가지로 정의 가능하다.
