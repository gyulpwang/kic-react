/*
전달해주는 액션객체, 타입, state를 받아서 처리해주는 리듀서 함수 작성
*/
import * as types from '../actions/ActionTypes'

// 초기상태
const initialState={
    color: 'black', // 적용색깔
    number: 0       // 증가 또는 감소 숫자
}

// 리듀서함수 => 순수함수 형태로 작성해야 한다.(화살표 함수 형식 안됨!!)
function counter(state=initialState, action){
    switch(action.type){
        // 증가
        case types.INCREMENT:
            return {
                ...state,   /* 동적 배열(기존 배열 내용을 변경 -> 새로운 배열) */
                number:state.number + 1
            };
        // 감소
        case types.DECREMENT:
            return {
                ...state,   /* 동적 배열(기존 배열 내용을 변경 -> 새로운 배열) */
                number:state.number - 1
            };
        // 색깔
        case types.SET_COLOR:
        return {
                ...state,   /* 동적 배열(기존 배열 내용을 변경 -> 새로운 배열) */
                color:action.color
            };
        // default
        default:
            return state;   // 기존의 값을 그대로 store에 덮어쓴다,
    }
}

export default counter;