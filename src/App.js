import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

import "../src/styles/App.css"

function App() {
  
    const [posts, setPosts] = useState([
      {id: 1, title: 'JavaScript', body: 'Discription'},
      {id: 2, title: 'JavaScript 2', body: 'Discription'},
      {id: 3, title: 'JavaScript 3', body: 'Discription'}
    ]);

    // Принимаем newPost из дочернего компонента
    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

    // Принимаем post из дочернего компонента
    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title={"Список постов JavaScript"}/>
    </div>
  );
}

export default App;
