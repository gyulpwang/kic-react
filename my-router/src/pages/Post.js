import React from 'react';
import {Link, Route} from 'react-router-dom';

const Post = ({match}) => {
    return(<div>
            <h2>포스트 {match.params.id}</h2>
           </div>
          )
}

export default Post;