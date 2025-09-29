//회원가입 폼만들기
// 아이디, 비밀번호, 나이, 이메일, 가입일, 취미 ...

let userName = "seryung"; // 사용자 아이디
let userPassword = "123456789"; // 사용자 비밀번호 (string)
let userAge = 22; // (number)
let isEmailVerfied = false; // 이메일 인증여부 (boolean) --> true or false 1 or 0
let signDate = new Date(); // 가입일 (Date)
let hobbies = ["음악","독서","영화"]

// 오류
let age = "22";


//string : 텍스트 정보(ex> 아이디, 비밀번호, 이름, 주소 등)
//number : 숫자 --> 계산이 필요한 값
//boolean: 참, 거짓 판단(인증여부, 동의여부)
//array: 여러개의 값을 한번에 입력받을 때