// 스마트 시간 도우미 프로그램

let now = new Date();
let hour = now.getHours();  
let minute = now.getMinutes(); 
let day = now.getDay();    

const days = ["일", "월", "화", "수", "목", "금", "토"];

let greeting = ""; // 인삿말
if (hour < 6) {
  greeting = "좋은 새벽입니다!";
} else if (hour < 12) {
  greeting = "좋은 아침입니다!";
} else if (hour < 18) {
  greeting = "좋은 오후입니다!";
} else {
  greeting = "좋은 저녁입니다!";
}

let schedule = "";

if (day === 1) { // 월요일
  if (hour >= 10 && hour < 13) {
    schedule = "월요일 오전 수업시간입니다!";
  } else if (hour === 13 && minute >= 1 && minute <= 59) { // ===는 일치연산자
    schedule = "월요일 점심시간입니다!";
  } else if (hour >= 14 && hour < 17) {
    schedule = "월요일 오후 수업시간입니다!";
  } else {
    schedule = "월요일 자유시간입니다!";
  }
}

else if (day === 2) { // 화요일
  if (hour >= 9 && hour < 12) {
    schedule = "화요일 오전 수업시간입니다!";
  } else if (hour === 12 && minute >= 1 && minute <= 59) {
    schedule = "화요일 점심시간입니다!";
  } else if (hour >= 13 && hour < 19) {
    schedule = "화요일 오후 수업시간입니다!";
  } else {
    schedule = "화요일 자유시간입니다!";
  }
}

else if (day === 3) { // 수요일
  if (hour === 11) {
    schedule = "수요일 오전 수업시간입니다!";
  } else if (hour === 12 && minute >= 1 && minute <= 59) {
    schedule = "수요일 점심시간입니다!";
  } else if (hour >= 13 && hour < 17) {
    schedule = "수요일 오후 수업시간입니다!";
  } else {
    schedule = "수요일 자유시간입니다!";
  }
}

else if (day === 4) { // 목요일
  if (hour === 11) {
    schedule = "목요일 오전 수업시간입니다!";
  } else if ((hour === 12 && minute >= 1) || (hour === 13)) {
    schedule = "목요일 점심시간입니다!";
  } else if (hour >= 14 && hour < 17) {
    schedule  = "목요일 오후 수업시간입니다!";
  } else {
    schedule = "목요일 자유시간입니다!";
  }
}

else if (day === 5) { // 금요일
  schedule = "금요일은 공강입니다!";
}

else if (day === 0 || day === 6) { // 주말
  schedule = "주말입니다!";
}

console.log("현재 스케줄 메시지:", schedule);

let nextEvent = null; // null은 "의도적으로 비어있음" 을 의미하는 값

if (day === 1) { // 월요일
  if (hour < 10) nextEvent = new Date(now.setHours(10,0,0,0)); // now.setHours(10,0,0,0)은 오늘 날짜의 10시 0분 0초로 바꾸는 메서드
  else if (hour < 13 || (hour === 13 && minute <= 0)) nextEvent = new Date(now.setHours(13,1,0,0));
  else if (hour < 14) nextEvent = new Date(now.setHours(14,0,0,0));
  else if (hour < 17) nextEvent = new Date(now.setHours(17,0,0,0));
}

else if (day === 2) { // 화요일
  if (hour < 9) nextEvent = new Date(now.setHours(9,0,0,0));
  else if (hour < 12) nextEvent = new Date(now.setHours(12,0,0,0));
  else if (hour < 13) nextEvent = new Date(now.setHours(13,0,0,0));
  else if (hour < 19) nextEvent = new Date(now.setHours(19,0,0,0));
}

else if (day === 3) { // 수요일
  if (hour < 11) nextEvent = new Date(now.setHours(11,0,0,0));
  else if (hour < 12) nextEvent = new Date(now.setHours(12,0,0,0));
  else if (hour < 13) nextEvent = new Date(now.setHours(13,0,0,0));
  else if (hour < 17) nextEvent = new Date(now.setHours(17,0,0,0));
}

else if (day === 4) { // 목요일
  if (hour < 11) nextEvent = new Date(now.setHours(11,0,0,0));
  else if (hour < 14) nextEvent = new Date(now.setHours(14,0,0,0));
  else if (hour < 17) nextEvent = new Date(now.setHours(17,0,0,0));
}

// 금, 토, 일은 다음 일정 없음
let remaining = "";
if (nextEvent) { // nextEvent가 null이 아니고 값이 있으면 실행
  let diff = nextEvent - new Date(); 
  let diffHour = Math.floor(diff / (1000 * 60 * 60)); // Math.floor() --> 소수점 아래 버림 --> 정수 시간
  // diff / (1000 * 60 * 60) --> 시간
  // (diff % (1000* 60 * 60)) / (1000 * 60) --> 나머지를 분으로 변환
  let diffMin = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  remaining = `다음 일정까지 ${diffHour}시간 ${diffMin}분 남았어요!`;
  // ${} 안에 변수나 연산 넣으면 결과가 문자열 안으로 들어감
} else {
     remaining = "오늘 일정은 모두 끝났습니다!";
  }
  

// ===== 출력 =====
console.log("스마트 시간 도우미");
console.log(`현재: ${hour}시 ${minute}분 (${days[day]}요일)`);
console.log(greeting);
console.log(schedule);
console.log(remaining);
