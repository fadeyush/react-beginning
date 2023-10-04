import React, { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

import "../src/styles/App.css"

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'нJavaScript', body: 'бDiscription'},
    {id: 2, title: 'бJavaScript 2', body: 'дDiscription'},
    {id: 3, title: 'оJavaScript 3', body: 'нDiscription'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  // Принимаем newPost из дочернего компонента
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  // Принимаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}} />
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка по' 
        options={[{value:'title', name:'По названию'},{value:'body', name:'По описанию'}]}
      />
      {
        posts.length
        ? 
        <PostList remove={removePost} posts={posts} title={"Список постов JavaScript"}/>
        : 
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены
        </h1>
      }
    </div>
  );
}

export default App;
