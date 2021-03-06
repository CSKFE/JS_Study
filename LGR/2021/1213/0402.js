/* 변수에 여러 개의 값을 저장하는 방법 */

// 변수는 하나의 값을 저장하기 위한 수단이다
var userID = 1;
var userName ='Lee';

//  객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 없당.
var user = {id: 1, name:'Lee'};

var users=[
    {id: 1, name:'Lee'},
    {id: 2, name:'Kim'}
];

// 변수느 하나의 값을 저장하기 위한 메커니즘
// 여러대의 값을 저장하려면 여러개의 변수를 사용해야함
// 단, 배열이나 객체 같은 자료구조를 사용하면 관련이 있는 여러 개의 값을 구룹화해서 하나의 값으로 사용할 수 있음
// 변수를 사용하려면 반드시 선언이 필요하다. 변수를 선언할 때는 var, let, const 키워드를 사용한다.