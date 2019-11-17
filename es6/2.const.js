/*
2. const.js
형식) const 변수명 = 저장할 값 -> 상수화 -> 중간에 값을 변경 X
*/

const name = '테스트';
//name = '임시';    // 이렇게 사용 X
const addr = '서울시 강남구';

console.log('[const] 내 이름은 ' + name + '이고, 주소는 ' + addr + '입니다.');

// 백틱문자열 `
// ${변수} : JSP에서 사용하는 EL문자법?
console.log(`[백틱문자열] 내 이름은 ${name}이고, 주소는 ${addr}입니다.`);

// 수식도 가능
console.log(`[수식도가능] 1+1=${1+1}`)

var test = `ES6 Testing
첫 번째 줄바꿈!
두 번째 줄바꿈~!!
`;
console.log(`[자동줄바꿈] ${test}`);

// cls : 콘솔 화면 클리어하는 명령어