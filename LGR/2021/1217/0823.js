// continue 문은 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동한다 

// continue 문을 사용하지 않으면 if 문 내에 코드를 작성해야 한다.
for (var i = 0; i < string.length; i++) {
  // "l"이면 카운트를 증가시킨다.
  if (string[i] === 'l') {
    count++;
    // code
    // code 
  }
}

// continue 문을 사용면 if 문 밖에 코드를 작성할 수 있다.
for (var i = 0; i < string.length; i++) {
  // "l"이 아니면 카운트를 증가시키지 않는다.
  if (string[i] !== 'l') continue;

  count++;
  // code
  // code 
}