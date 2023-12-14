import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PostsService from '../API/PostsService';
import { useFetching } from '../hooks/useFetching';
import MyLoader from '../components/UI/loader/MyLoader';
import CommentsList from '../components/CommentsList';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async(id)=>{
        const resp = await PostsService.getPostById(id);
        setPost(resp.data)
      }, []);

    const [fetchCommentsByPost, isCommentsLoading, errorComments] = useFetching(async(id)=>{
        const resp = await PostsService.getCommentsById(id);
        setComments(resp.data)
    }, []);

    useEffect(()=> {
        fetchPostById(params.id);
        fetchCommentsByPost(params.id)
    }, [])

    return (
        <div>
            <h1>
                Страница поста c ID - {params.id}
            </h1>
            {isLoading 
            ?
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
            :
            <div>
                <h3>{post.id} - {post.title}</h3>
                <p>{post.body}</p>
            </div> 
            }

            <h1>
                Комментарии
            </h1>
            {isCommentsLoading 
            ?
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><MyLoader/></div>
            :
            <div>
                <CommentsList comments={comments}/>
            </div> 
            }
        </div>
    );
};

export default PostIdPage;