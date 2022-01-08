/* 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체 */

// 자바스크립트는 프로퍼티를 생성할때 프로퍼티 어트리뷰트 라는 프로퍼티의 상태를 나타내는 값을 기본 값으로 정의한다
// 프로퍼티의 상태값 확인은 Object.getOwnPropertyDescriptor 라는 메서드를 사용해서 
// 프로퍼티의 값, 갱신여부 , 열거여부 , 재정의 가능 여부를 확인할 수 있다

const person = {
  name : 'choi'
};

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
//인자로 객체와 객체의 키를 넣어야한다

// ES8에 추가된 getOwnPropertyDescriptors 를 통해 여러 값을 한번에 확인할 수 있다

const people = {
  name : 'choi',
};

people.age = 28;

console.log(Object.getOwnPropertyDescriptors(people));
//인자로 참조할 객체만 넣어주면 된다