1/**
 * 8. 제어문
 * 조건에 따라 코드 블록을 실행/반복 실행 하기 위해 사용
 */

// 삼항조건 연산자는 값으로 평가되는 표현식을 만들기 때문에 변수에 할당할 수 있다. 하지만 if ...else 문은 값처럼 사용할 수 없기 때문에 변수에 할당할 수 없다.
var num = 500;
var yap = num ? (num > 0 ? '양수' : '음수') : 'zero';

console.log(yap);

// for문 연습
for(var i = 0; i < 2 ; i++) {
    console.log(i);
}

for(var a = 1; a < 7; a++) {
    for(var b = 1; b < 7; b++) {
        if( a + b === 6) {
            console.log(`[${a} + ${b}]`);
        }
    }
}

//반복하는 횟수가 불명확할땐 for문을 활용한다.

var string = 'Merry Christmas!';
var search = 's';
var index;
var count = 0;
var count2 = 0;

for (var i = 0; i < string.length; i++) {
    if(string[i] === search) {
        index = i;
        break;
    }
}
console.log(index);

for (var a = 0; a < string.length; a++) {
    if(string[a] !== search) continue; //'s' 가 아니면 현 시점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    count++; //continue문이 실행되면 이 문은 실행되지 않는다.
}
console.log(count);

for (var b = 0; b< string.length; b++) {
    if(string[b] === search) count2++;
}
console.log(count2);