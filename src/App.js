import React, { useMemo, useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import { useSortedPosts, useSortedAndSearchPosts } from './hooks/usePosts';
import PostsService from './API/PostsService';
import MyLoader from './components/UI/loader/MyLoader';
import {useFetching} from './hooks/useFetching'

import "../src/styles/App.css"
import axios from 'axios';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async()=>{
    const posts = await PostsService.getAll();
    setPosts(posts);
  }, []);

  const sortedAndSearchPosts = useSortedAndSearchPosts(filter.query, posts, filter.sort)

  // Принимаем newPost из дочернего компонента
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  // Принимаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(()=>{
    fetchPosts()
  }, [])
  
  return (
    <div className="app">
      <MyButton style={{'marginTop': '15px'}} onClick={e=>setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0'}} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError && 
      <h1>Произошла ошибка {postError}</h1>}
      {isPostsLoading 
        ?
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
        :
        <PostList remove={removePost} posts={sortedAndSearchPosts} title={"Список постов JavaScript"}/>
      }
    </div>
  );
}

export default App;
