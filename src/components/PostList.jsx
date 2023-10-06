import React, { useState, createRef } from 'react';
import { createRoot } from 'react-dom/client';
import PostItem from './postItem';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';

const postList = function ({posts, title, remove}) {
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

export default postList;