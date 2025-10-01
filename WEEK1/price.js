// 상품 가격 계산 프로그램
const productName = "모자"; // 상품명 (string)
const price = 49900; // 정가 (number)
const discount = 10; // 할인율 (number)
const Free = 50000; // 무료배송 조건 (number)
const Fee = 3000; // 기본 배송비 (number)

let discountAmount = price * (discount / 100); // 할인 금액 계산
let discounted = price - discountAmount; // 할인가 계산
let checkFee = discounted >= Free ? 0: Fee; // 배송비 조건 체크
let finalPrice = discounted + checkFee; // 최종 결제 금액 계산

console.log("온라인 쇼핑몰 영수증");
console.log("상품명:", productName);
console.log("정가:", price.toLocaleString() + "원");
//toLocalString()는 숫자를 읽기 좋은 형태로 변환해주는 메서드 (주로 천 단위 구분 콤마를 넣을 때 사용)
console.log("할인:", "-" + discountAmount.toLocaleString() + "원 (" + discount + "%)");
console.log("배송비:", checkFee === 0 ? "무료 (5만원 이상)" : checkFee.toLocaleString() + "원");
console.log("--------------------------");
console.log("최종 결제:", finalPrice.toLocaleString() + "원");
console.log("총 절약:", discountAmount.toLocaleString() + "원");