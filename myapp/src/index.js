// 1. 화면에 모든 컴포넌트를 불러와서 결합
// 필수 -----------------------------------------------------
import React from 'react';  // 컴포넌트 정보
import ReactDOM from 'react-dom';   // 화면에 출력(Virtual Machine)
// ----------------------------------------------------------
//import './index.css';

// 2. 컴포넌트
import App from './components/App';    // App.js(화면에 결합 -> js)
                                       // ./는 src의 상대경로를 의미하므로 변경한 경로(/components)를 적어줘야함.
import App2 from './components/App2';

//import * as serviceWorker from './serviceWorker';

// 3. ReactDOM -> index.html <div id="root"></div>
// ㄴ App을 index.html의 어디에 붙여줄 것인가
// 첫번째 인수 : 화면에 출력할 컴포넌트명(반드시 뒤에 /줘야 인식함!)
// 두번째 인수 : 결합해서 보여줄 위치(id를 통해) -> index.html 파일의 컴포넌트를 붙일 요소

// ReactDOM(부모) > id="root" => <App 매개변수명="~"/>
// <자식 매개변수명="~" 매개변수2=~ />

/*
before : prop를 정상적으로 전달한 경우
ReactDOM.render(<App headerTitle="전달연습1"
                />, document.getElementById('root'));
ReactDOM.render(<App2 contentTitle="전달연습2" 
                      contentBody="부모에서 자식에게 전달함"
                />, document.getElementById('root2'));
*/
// after : props를 전달하지 않은 경우
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App2 />, document.getElementById('root2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
