import React from 'react';

const Post = ({match, location}) => {
    return (
        <div>
            <p>포스트 {match.params.id}</p>
            <p>location.pathname : {location.pathname}</p>
            <p>match.path : {match.path}</p>
            <p>match.url : {match.url}</p>
        </div>
    );
};

export default Post;
