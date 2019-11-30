import React from 'react';
import ReactDOM from 'react-dom';

// 컴포넌트를 이동 -> 자동 import 수정 가능
import App from './containers/App';

// 리덕스를 적용시키기 위해서 라이브러리 불러오기
import {createStore} from 'redux';   // 스토어 생성
import reducers from './reducers';     // reduce 함수
import {Provider} from 'react-redux';  // 스토어와 연결시킬 루트(App)

// 1. 스토어 생성(+리듀서와 연결)
const store = createStore(reducers)

// 2. 어떤 컴포넌트를 시작점으로 지정할 것인가? <Provider>컴포넌트명</Provider>
// <Provider store={생성시킨 스토어 객체명}>
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
                , document.getElementById('root'));
