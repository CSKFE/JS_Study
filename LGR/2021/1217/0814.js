// while문은 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속 반복 한다

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} // 0 1 2

// 무한루프를 탈출하기 위해서는 코드 블럭 탈출 조건을 if문에 부여하고 breake 문으로 나온다

var count = 0;

// 무한루프
while (true) {
  console.log(count);
  count++;
  // count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
} // 0 1 2

// do...while 문은 코드 블록을 실행하고 조건식을 평가한다 

var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2