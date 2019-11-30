/*
src/client/Root.js -> 웹 상에서 요청 -> 맨 처음 찾는 위치 지정
*/
import React from 'react';
import App from 'shared/App';   // cross-env 라이브러리를 통해 NODE_PATH로 src가 이미 잡혀져 있어 상대경로 안 잡아줘도 바로 가능
import {BrowserRouter} from 'react-router-dom';
import Menu from 'components/Menu';

const Root = () => (
    <BrowserRouter>
        <div>
            <Menu />
            <App />
        </div>
    </BrowserRouter>
)

export default Root;