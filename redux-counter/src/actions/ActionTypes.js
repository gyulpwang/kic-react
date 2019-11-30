/*
이벤트를 발생시켰을 때 어떠한 기능을 구현할 것인지를 액션 이름 지정

cf. ES6)
import * as types(별칭) from './ActionTypes'
=> 리듀서 함수의 매개변수로 전달하기 위해서 필요 => 스토어의 값을 변경
*/

// 액션명은 주로 대문자로 쓴다.
export const INCREMENT = 'INCREMENT';   // 증가
export const DECREMENT = 'DECREMENT';   // 감소
export const SET_COLOR = 'SET_COLOR';   // 색깔 변경
