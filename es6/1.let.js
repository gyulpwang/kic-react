/*
    1.let.js
*/
var foo = 123;
console.log('[var] foo -> ', foo); // 123
{
    var foo = 456;  // 중복선언이 가능
}
console.log('[var] foo -> ', foo, '\n'); // 456

let foo2 = 789;
console.log('[let] foo2 -> ', foo2);  // 789
{
    let foo2 = 456; // 중복선언이 안됨
}
console.log('[let] foo2 -> ', foo2);  // 789

// 콘솔에 node 1.let.js 치면 실행 결과 확인 가능