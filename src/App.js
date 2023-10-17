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
import {useFetching} from './hooks/useFetching';
import {getPageCount, usePagesArray} from './utils/pages';
import MyPagination from './components/UI/pagination/MyPagination';

import "../src/styles/App.css"
import axios from 'axios';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page)=>{
    const response = await PostsService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = Number(response.headers['x-total-count']);
    setTotalPages(getPageCount(totalCount, limit));
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
     fetchPosts(limit, page)
  }, [])

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }
  
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
      <MyPagination totalPages={totalPages} page={page} changePage={changePage}></MyPagination>
    </div>
  );
}

export default App;
