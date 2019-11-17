// es5(require)) -> es6(import) -> typescript(클래스 타입 지원)

// 형식) import 클래스 from '경로포함파일명'
//import React, {Component} from 'react'; // react.js(1)
import React from 'react';  // react.js(2)
// 추가
import '../App.css';

// 화면에 출력할 컴포넌트 작성
// export default class App extends React.Component{ // 1)
//class App extends Component { // react.js(1)
class App extends React.Component{  // react.js(2)
  // 화면에 출력(필수)
  // render() 바깥 : 이벤트 처리 함수
  sayHello(){ // function 등의 예약어 생략 가능
    alert("이벤트 연습")
  }

  render(){ // react의 라이프사이클 중 맨 마지막. 출력해야하니까 필수
    // render() 안 : 변수선언, 스타일시트 적용
    let text = "리액트 연습";
    let pStyle = {
      color : 'aqua',
      backgroundColor : 'black'
    };

    // JSX(JavaScript Expression) 문법
    // 1. JSX 무조건 하나의 태그로만 리턴해야 한다. 따라서 여러 줄의 소스를 출력하려면 트리구조로 감싸서 하나의 태그로 출력 가능하도록
    return (
      <div>
        <h1 class="App-title">App.js</h1>
        <h1 class="App">리액트 구조연습</h1>
        <h1 className="App2">두번째 문장구조, {text}</h1>
        <p style={pStyle}>{1 == 1 ? 'True' : 'False'}</p>
        {/*
          삼항연산자 : {조건식} ? 참 : 거짓;
          1. on 이벤트 종류의 첫 글자는 항상 대문자
          2. this.함수명 -> () (X)
        */}
        <h1>전달받은 매개변수명 : {this.props.headerTitle}</h1>
        <button onClick={this.sayHello}>click me</button>
        <br/>
      </div>
    );
  }
}

/*
못받았을 때의 기본 설정값을 지정 (항상 클래스 아래에 선언한다)
형식) 자식클래스.defaultProps={ 매개변수명 : '디폴트값', ~}
*/
App.defaultProps = {
  headerTitle : "전달받지 못해서 대신 기본값 출력"
}

export default App; // export default 외부로 내보낼 클래스명; // 2)
