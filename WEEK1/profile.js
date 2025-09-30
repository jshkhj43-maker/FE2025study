//프로필 카드 만들기

const Name = "정세령"; // string
let Age = 22; // number
const Student = true; // boolen
let Height = 151; // number
const City = "서울"; // string
let Hobbies = ["음악","독서","영화"] // array

console.log("=== 내 프로필 카드 ===");
console.log("이름:", Name);
console.log("나이:", Age + "세");
console.log("학생:", Student ? "예" : "아니오"); // ?와 :는 삼항 연산자를 구성하는 필수 기호 
// 삼향 연산자 : 자바스크립트에서 조건문을 간단하게 한 줄로 쓰는 방법
console.log("키:", Height + "cm");
console.log("거주지:", City);
console.log("취미:", Hobbies.join(", ")); // join() 메서드는 배열 안의 모든 요소를 하나의 문자열로 합쳐서 반환, 
// .join()을 붙이지 않으면 배열 그대로 [ '음악', '독서', '영화' ]처럼 대괄호와 함께 출력 --> .join(", ")를 붙이면 보기 좋은 문자열

console.log("===================");
console.log("변수 타입 확인:");
console.log("이름 타입: string");
console.log("나이 타입: number");
console.log("학생 타입: boolean");
console.log("키 타입: number");
console.log("거주지 타입: string");
console.log("취미 타입: array");