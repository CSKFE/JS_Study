/* 데이터 타입 */
// 자바스크립트의 데이터타입은 총 7가지이며 원시타입과 객체타입(참조타입) 으로 나뉜다.
// 원시타입에는 숫자, 문자열, 불리언, null, undefined, symbol
// 객체타입(참조타입)에는 객체,함수,배열 등이 있다.
// 일반적인 문자열 내에서는 개행이 허용되지않는다
// 템플릿리터럴에서는 개행이 허용된다.
// 변수에 null을 할당하면 이전에 참조하던 값을 명시적으로 제거하는것을 의미한다.

/* 심볼(symbol) */
// 변경 불가능한 원시타입의 값이다.
// 다른값과 중복되지않는 유일무이한 값이다.
// 원시타입은 리터럴을 통해 생성하지만, 심볼은 함수를 호출해 생성한다.
// 이때 생성된 심볼값은 외부에 노출되지않으며, 다른값과 중복되지않는 유일무이한 값을 갖는다.

/* 데이터타입이 필요한 이유 */
// 값을 저장할때 필요한 메모리공간의 크기를 결정하기 위함
// 값을 참조할때 한번에 읽어들여야할 메모리공간의 크기를 결정하기 위함
// 메모리에서 읽어들인 2진수를 어떠헥 해석할지 결정하기 위함

//자바스크립트의 변수는 선언이아닌 할당에 의해 타입이 결정된다
//그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할수있다.