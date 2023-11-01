import React from 'react';
import PostItem from './postItem';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import '../styles/Posts.css';

const PostList = function ({posts, title, remove}) {
  if(!posts.length) {
    return (
      <h1 style={{textAlign: 'center'}}>
        Посты не найдены
      </h1>
    )
  }
  return (
      <div>
        <h1 className="posts__title">{title}</h1>
        <TransitionGroup>
        {posts.map((post, index)=> 
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
            <PostItem remove={remove} number={index+1} post={post}/>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
  );
}

export default PostList;