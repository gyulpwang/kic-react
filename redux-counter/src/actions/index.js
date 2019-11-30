/*
/src/actions/index.js
액션타입에 맞는 액션객체를 생성 -> 함수 선언
*/
import * as types from './ActionTypes';

// 증가
export const increment = () => ({
    type: types.INCREMENT
})

// 감소
export const decrement = () => ({
    type: types.DECREMENT
})

// 색깔변경
export const setColor = (color) => ({
    type: types.SET_COLOR,
    color   // state에 적용시킬 색깔
})