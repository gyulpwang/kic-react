/*
src/components/Menu2.js
메뉴를 선택했을 때 스타일을 적용시키기 위해서 작성한 파일
activeStyle -> 적용시킬 스타일을 반영시키기 위한 속성명
*/
import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu2 = () => {
    const activeStyle={
        color:'#cdcdee',
        fontSize: '2rem'
    }

    return(<div>
            <h1>Menu2</h1>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About foo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
           </div>
          )
}

export default Menu2;