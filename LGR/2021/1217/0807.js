// 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 이동한다

/*

switch (표현식) {
    case 표현식1:
      switch 
      break;
    case 표현식2:
      switch 문의 표현식과 표현식2가 일치하면 실행될 문;
      break;
    default:
      switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
  }

  */
 // 월을 영어로 변환한다. (11 → 'November')
// 월을 영어로 변환한다. (11 → 'November')
var month = 11;
var monthName;

switch (month) {
  case 1:
    monthName = 'January';
    break;
  case 2:
    monthName = 'February';
    break;
  case 3:
    monthName = 'March';
    break;
  case 4:
    monthName = 'April';
    break;
  case 5:
    monthName = 'May';
    break;
  case 6:
    monthName = 'June';
    break;
  case 7:
    monthName = 'July';
    break;
  case 8:
    monthName = 'August';
    break;
  case 9:
    monthName = 'September';
    break;
  case 10:
    monthName = 'October';
    break;
  case 11:
    monthName = 'November';
    break;
  case 12:
    monthName = 'December';
    break;
  default:
    monthName = 'Invalid month';
}

console.log(monthName); // November

// default 문에는 break 문을 생략하는 것이 일반적이다. 
// default 문은 switch 문의 가장 마지막에 위치하므로 default 문의 실행이 종료하면 switch 문을 빠져나간다.  