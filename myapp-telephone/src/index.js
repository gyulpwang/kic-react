//1.화면에 모든 컴포넌트를 불러와서 결합
import React from 'react';
import ReactDOM from 'react-dom'; // 화면에 출력
// ----------------------------------------
import './index.css';

import App from './components/App'; // App.js(화면에 결합->js)

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();