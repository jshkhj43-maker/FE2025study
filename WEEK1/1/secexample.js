//const - 변하지 않는 사용자의 기본 정보
const USER_ID = "user_12345";
const SIGNUP_DATE = "2024-09-28";

//let - 변경되는 상태 정보
let isOnline = false; // 온라인 상태
let lastActiveTime = Date.now(); // 마지막 활동시간
let unreadMessageCount = 0; // 읽지 않은 메시지 수