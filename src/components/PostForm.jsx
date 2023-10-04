import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'', body:''});

    function addNewPost(e) {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(), 
        }

        if (newPost.title.length && newPost.body.length) {
            create(newPost);
            setPost({title:'', body:''});
        }
      }

    {/* Неуправляемый/неконтролируемый инпут
     const bodyInputRef = useRef();
     <MyInput
       ref={bodyInputRef}
       type='text' 
       placeholder='Описание поста'
     />
    */}

    return (
        <form>
        {/* Управляемый компонент */}
        <MyInput
          value = {post.title}
          onChange = {e => setPost({...post, title: e.target.value})}
          type='text'
          placeholder='Название поста'
        />
        <MyInput
          value = {post.body}
          onChange = {e => setPost({...post, body: e.target.value})}
          type='text' 
          placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
};

export default PostForm;