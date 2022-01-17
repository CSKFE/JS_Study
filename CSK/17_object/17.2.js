const circle1 = {
  radius : 5,
  getDiameter : function() {
    return this.radius * 2;
  }
};

const circle2 = {
  radius : 10,
  getDiameter : function() {
    return this.radius * 2;
  }
};

// 리터럴을 사용하여 같은 구조의 프로퍼티를 가진 객체를 두 번 생성했다.

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function() {
    return 2 * this.radius;
  }
}

const circle3 = new Circle(5);
const circle4 = new Circle(10);

console.log(circle3.getDiameter());
console.log(circle4.getDiameter());

//생성자 함수를 사용하여 인스턴스를 생성하면 위와같이 리터럴을 여러번 사용할 필요없어진다.

const test = Circle(5);

console.log(test);
console.log(radius);
//생성자 함수를 new 연산자 없이 호출하면 일반함수로써 호출이된다
//일반함수 Circle은 return 문이 없으므로 언디파인드가 반환된다