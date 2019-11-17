import React from 'react';

// 중첩해서 불러올 자식 컴포넌트 import
import Header from './Header'   // .js는 생략 가능
import Content from './Content'
import RandomNumber from './RandomNumber'

// 여러 개의 컴포넌트를 작성 -> 중첩 컴포넌트 작성
class App2 extends React.Component{
    // 데이터를 저장
    constructor(props){
        super(props)

        // 초기설정 -> this.state={속성명(=키명):값,,} (es6는 주로 멤버변수를 생성자 안에 설정)
        this.state = {
            value: Math.round(Math.random() * 100)  // 0 ~ 99
        }

        // 이벤트 함수 연결
        this.updateValue = this.updateValue.bind(this)
        // ~addListener(this)
    }

    // this.state.value = 수정할 값(X) -> this.setState(수정할값)(O)
    updateValue(randomValue){
        this.setState({
            value: randomValue  // 속성명 : 넘겨받은 매개변수명
        })
    }
    test(){
        alert('매개변수가 없는 부모함수 호출됨!')
    }

    render(){
        return(
        <div>
            <h1 class="App-title">App2.js</h1>
            <h1>{this.props.contentTitle}</h1>
            <h1>{this.props.contentBody}</h1>
            <h1>자기값 출력: {this.state.value}</h1>
            {/* App2 -> Header(title) -> {this.props.title} */}
            <RandomNumber number={this.state.value} 
                          onUpdate={this.updateValue}
                          onTest={this.test}
            />
            <Header title = {this.props.contentTitle} />
            <Content body = {this.props.contentBody}/>
        </div>
        );
    }
}

/*
못받았을 때의 기본 설정값을 지정
형식) 자식클래스.defaultProps={ 매개변수명 : '디폴트값', ~}
*/
App2.defaultProps = {
    contentTitle : "기본값 title",
    //contentBody : "기본값 body"
    contentBody : undefined
}

// Header
/*
class Header extends React.Component{
    render(){
        return(<h1>Header</h1>);
    }
}

// Content
class Content extends React.Component{
    render(){
        return(
        <div>
            <h2>Content</h2>
            <p>결국 답을 찾는 라이언!</p>
            <img src='data:image/png;base64,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' />
        </div>
        );
    }
}
*/

export default App2;