import React, { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import "../src/styles/App.css"

function App() {
  
    const [posts, setPost] = useState([
      {id: 1, title: 'JavaScript', body: 'Discription'},
      {id: 2, title: 'JavaScript 2', body: 'Discription'},
      {id: 3, title: 'JavaScript 3', body: 'Discription'}
    ]);

  return (
    <div className="app">
      <form>
        <MyInput type='text' placeholder='Название поста'/>
        <MyInput type='text' placeholder='Описание поста'/>
        <MyButton>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title={"Список постов JavaScript"}/>

    </div>
  );
}

export default App;
