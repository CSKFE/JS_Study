const person = {
  name : 'Lee'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// { value: 'Lee', writable: true, enumerable: true, configurable: true }
// 프로퍼티가 생성될때 모든 값은 true로 생성된다.
// 동적추가도 동일하다


// 접근자 프로퍼티(getter, setter)

const obj = {
  firstName : 'SunKyu',
  lastName : 'Choi',

  get fullName() {
    return `${this.firstName} ${this.lastName}`; 
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

obj.fullName = 'DaHye Lee'; // 접근자프로퍼티로 값을 할당하면 setter 함수가 호출된다

console.log(obj.fullName); // 접근자프로퍼티로 접근을하면 getter함수가 호출된다.