import React, { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import { useSortedPosts, useSortedAndSearchPosts } from './hooks/usePosts';

import "../src/styles/App.css"

function App() {
  
  const [posts, setPosts] = useState([
    {id: 1, title: 'нJavaScript', body: 'бDiscription'},
    {id: 2, title: 'бJavaScript 2', body: 'дDiscription'},
    {id: 3, title: 'оJavaScript 3', body: 'нDiscription'}
  ]);

  const [filter, setFilter] = useState({sort:'', query:''});
  const [modal, setModal] = useState(false)

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
      <PostList remove={removePost} posts={sortedAndSearchPosts} title={"Список постов JavaScript"}/>
    </div>
  );
}

export default App;
