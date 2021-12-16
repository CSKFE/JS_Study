
// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다.  

// 문자열 연결 연산자
'1' + '2'      // '12'
'1' + 2       // '12'

// 산술 연산자
1 + 2          // 3
1 + true       // 2 (true → 1)
1 + false      // 1 (false → 0)
true + false    // 1 (true → 1 / false → 0)
1 + null       // 1 (null → 0)
1 + undefined // NaN (undefined → NaN)