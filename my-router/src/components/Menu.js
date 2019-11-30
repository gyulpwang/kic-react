/*
src/components/Menu.js
링크를 걸어서 이동해주는 페이지를 지정해주는 파일(상단메뉴역할)
*/
import React from 'react';
// Link 태그 to="요청경로를 지정"
import {Link} from 'react-router-dom';

const Menu = () => {
    return(<div>
            <h1>Menu1</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/about/foo">About foo</Link></li>
            </ul>
           </div>
          )
}

export default Menu;