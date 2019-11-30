/*
src/containers/CounterContainer 컴포넌트(내부적으로 저장)
// 스토어 - 매개체 - 컴포넌트(구독)
*/
import Counter from '../components/Counter';
import * as actions from '../actions';    // 액션타입
import {connect} from 'react-redux';    // 스토어와 연결시킬 컴포넌트 지정

// 13가지의 색깔
export function getRandomColor(){
    const colors = [
        '#495057','#f03e3e','#d6336c','#ae3ec9', '#7048e8',
        '#4263eb','#1c7cd6','#1098ad', '#0ca678','#37b24d',
        '#74b816','#f59f00','#f76707'
    ];
    const random = Math.floor(Math.random() * 13)

    return colors[random];    // 선택된 인덱스 번호
}

// store 안에 state 값을 props로 연결해서 모든 컴포넌트가 구독할 수 있도록 연결 -> connect 함수
// connect(1.state -> props로 전달함수명, 2. 액션을 리듀서에 연결시킬 함수명)(최종적으로 연결시킬 컴포넌트명)
const mapStateToProps = (state) => ({
    color: state.color,     // 새로 변경시킬 색깔
    number: state.number    // 변경시킬 숫자(증가 or 감소)
})
const mapDispatchToProps = (dispatch) => ({
    // 전달받은 액션의 종류에 따라서 호출할 함수를 연결(dispatch)
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor:  () => {
        const color = getRandomColor(); // 선택된 색깔
        dispatch(actions.setColor(color))
    }
})
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;