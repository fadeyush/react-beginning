import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import PostsService from '../API/PostsService';
import { useFetching } from '../hooks/useFetching';
const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [fetchPostById, isLoading, error] = useFetching(async(id)=>{
        const resp = await PostsService.getPostById(id);
        setPost(resp.data)
      }, []);
    

    useEffect(()=> {
        fetchPostById(params.id);
    })

    console.log(post)

    return (
        <h1>
            Страница поста c ID - {params.id}
        </h1>
    );
};

export default PostIdPage;