import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Post} from 'pages';

// App -> Posts -> Post
const Posts = ({match}) => {
    const borderStyle={
        borderStyle:'solid',
        borderColor:'#ffdddd'
    }

    return(<div style={borderStyle}>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            {/* 순서를 뒤집으려면 Switch, 안 뒤집으려면 exact  */}
            {/* component  : 복잡한 디자인의 컴포넌트
                render     : 단순한 문자 출력 */}
            <Route exact path={`
            ${match.url}`} render={()=>(<h3>Please select any Post</h3>)} />
            <Route path={`${match.url}/:id`} component={Post} />
           </div>
          )
}

export default Posts;