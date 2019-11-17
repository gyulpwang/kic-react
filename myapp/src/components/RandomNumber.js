import React from 'react'

class RandomNumber extends React.Component {
    constructor(props){
        super(props)
        this.updateNumber = this.updateNumber.bind(this)
    }

    // 부모의 함수를 호출해야 되는데 매개변수가 있다면
    // 자식 컴포넌트에서 호출하는 함수에서 부모의 넘겨받은 함수를 호출할 수 있도록 코딩해주어야 한다.
    updateNumber(){
        let value = Math.round(Math.random() * 100)   // 0 ~ 99

        // 부모의 함수 호출
        this.props.onUpdate(value)  // updateValue(value) -> 변경
    }

    render(){
        return(<h1>
            <h1>랜덤값 : {this.props.number}</h1>
            <button onClick={this.updateNumber}>랜덤값출력</button>
            <button onClick={this.props.onTest}>매개변수 없는 함수호출</button>
        </h1>)
    }
}

export default RandomNumber;