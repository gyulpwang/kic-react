import React from 'react';

/* Header.js */
class Header extends React.Component{
    render(){
    return(<h1>Header, {this.props.title}</h1>);
    }
}


export default Header;  // 1) exprot default 배포시킬 클래스명