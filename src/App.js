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

    const createPost = (newPost) => {
      setPosts([...posts, newPost])
    }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={"Список постов JavaScript"}/>
    </div>
  );
}

export default App;
