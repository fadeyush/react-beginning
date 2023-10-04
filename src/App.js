import React, { useMemo, useRef, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

import "../src/styles/App.css"

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'нJavaScript', body: 'бDiscription'},
    {id: 2, title: 'бJavaScript 2', body: 'дDiscription'},
    {id: 3, title: 'оJavaScript 3', body: 'нDiscription'}
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(()=>{
    if(selectedSort) {
      return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(()=>{
    return sortedPosts.filter(post=> post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedPosts]);

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
  }

  return (
    <div className="app">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}} />
      <MyInput
        placeholder='Поиск...'
        value = {searchQuery}
        onChange = {e => setSearchQuery(e.target.value)}
        type='text'/>
      <MySelect 
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Сортировка по' 
        options={[{value:'title', name:'По названию'},{value:'body', name:'По описанию'}]}
      />
      {
        sortedAndSearchPosts.length
        ? 
        <PostList remove={removePost} posts={sortedAndSearchPosts} title={"Список постов JavaScript"}/>
        : 
        <h1 style={{textAlign: 'center'}}>
          Посты не найдены
        </h1>
      }
    </div>
  );
}

export default App;
