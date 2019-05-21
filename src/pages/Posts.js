import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages'; 

const Posts = ({match, location}) => {
    return (
        <div>
           <h2>Post List</h2> 

           <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
                {/* match.url 에서 url은 현재 라우트의 경로를 의미. 여기선 Post */}
           </ul>
           <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
           {/* Post에 id가 주어지지 않았을 때를 의미. */}
           <Route path={`${match.url}/:id`} component={Post}/>
           <p>location.pathname : {location.pathname}</p>
            <p>match.path : {match.path}</p>
            <p>match.url : {match.url}</p>
        </div>
    );
};

export default Posts;