import React from 'react';
import PostItem from './postItem';

const postList = function ({posts, title}) {
    return (
        <div>
         <h1 className="posts__title">{title}</h1>
        {posts.map(post=> 
          <PostItem post={post} key={post.id}/>
        )}
        </div>
    );
}

export default postList;