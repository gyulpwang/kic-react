/*
3.arrow.js 화살표함수 =>, ->(자바의 람다함수)
형식) const 변수명 = (매개변수1, 매개변수2,,,) => {
    여기에 기능 기술
}
*/
// cf. javascript는 자료형을 쓰지 않지만 typescript에서는 타입을 쓸 수 있다.
/*
익명함수. 변수가 함수명을 대신한다. function cal(){}
익명함수의 경우 선언 전 출력이 불가능. 반드시 선언 후에 사용 가능하다.
*/
let cal = function(x){
    console.log('x =>', x);
    return x*x;
}
console.log(cal(10));   // 100

// 매개변수 하나일 때는 안 써줘도 된다. 두 개일때는 ()로 처리
const cal2 = x => x*x;
console.log(cal2(20));  // 400

// 2. map함수 => 기존의 배열의 요소 -> 하나씩 읽어서 새로운 배열로 리턴
let arr2 = [1, 2, 3];
let cal3 = arr2.map(function(x){
    return x + x;   // 2, 4, 6
})
console.log('cal3 ->', cal3);

const cal4 = arr2.map(x => x + x);
console.log('cal4 ->', cal4);

// 배열 디스트럭처링 => 배열의 각 요소를 분리해서 다른 변수에 각각 저장이 가능
const karr2 = ['d', 'e', 'f']
//let one1 = karr2[0]; let two2 = karr2[1]; let three3 = karr2[2];
// 형식) const [변수,,,] = 배열명 or [요소1, 요소2,,]
const [one1, two2, trhee3] = karr2;
console.log(one1, two2, trhee3);



function test(a){
    return a+5;
}

const test2 = (a, b) => {
    b = b+7;
    a = a+5;
    return a+b;
}
console.log(test2(1, 3));