import React, { useMemo } from 'react';

export const useSortedPosts = (sort, posts) => {
    const sortedPosts = useMemo(()=>{
        if(sort) {
          return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]));
        }
        return posts;
      }, [sort, posts]);
      
    return sortedPosts;
}

export const useSortedAndSearchPosts = (query, posts, sort) => {
    const sortedPosts = useSortedPosts(sort, posts)
    const sortedAndSearchPosts = useMemo(()=>{
        return sortedPosts.filter(post=> post.title.toLowerCase().includes(query.toLowerCase()));
      }, [query,  sortedPosts]);
      return sortedAndSearchPosts;
}