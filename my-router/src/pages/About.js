// /about -> about 컴포넌트
/*
url 창에 /about으로 요청해서 보여주는 컴포넌트
        match.params.전달받은 매개변수명
*/
import React,{Component} from 'react';
import queryString from 'query-string';

// match : 내장객체. 매개변수를 받는다.
const About = ({location, match}) => {    // const About = function(match){}
    const query = queryString.parse(location.search)
    console.log('query -> ', query);
    return(<div>
            <h2>About {match.params.name}</h2>
           </div>
          )
}
export default About;