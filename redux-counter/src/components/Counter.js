/*
src/components/Counter 생성 -> 화면에 출력
*/
import React from 'react';
import PropTypes from 'prop-types';     // 전달받은 값을 체크
import './Counter.css';                 // 스타일 시트 적용

// 스토어에서 저장된 데이터를 가져올 수 있는 코딩만
const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return(
        <div className="Counter"
             onClick={onIncrement}
             onContextMenu={(e)=>{
                // 기본기능 중지 -> e.preventDefault()
                e.preventDefault(); // 팝업창 중지
                onDecrement();
             }}
             onDoubleClick={onSetColor}
             style={{backgroundColor:color}}
        >
            {number}
        </div>
    )
}

// props의 전달받는 매개변수의 자료형을 설정
Counter.propTypes={
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
}

// 기본값 설정
Counter.defaultProps={
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter;