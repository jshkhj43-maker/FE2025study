// 생일 정보
let birthYear = 2004;
let birthMonth = 5;
let birthDay =21;

let today = new Date(); // today.getFullYear(), today getMonth 등을 사용하면 컴퓨터에서 날짜, 연 ,월, 일을 다 가져올 수 있음
let age = today.getFullYear() - birthYear;

if (
    today.getMonth() + 1 < birthMonth ||
    (today.getMonth() + 1 === birthMonth && today.getDate()<birthDay)
) {
    age --;
} // 위 두 조건중 하나라도 참이면 age-- 나이 한 살 줄이기


console.log("생일: ", birthYear + "년" + birthMonth +"월" + birthDay + "일");
console.log("현재 나이는", age + "세")
