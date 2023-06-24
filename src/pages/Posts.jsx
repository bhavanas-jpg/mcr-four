import React from 'react'
import PostCard from '../components/PostCard';
import { useData } from '../context/DataContext';

const Posts = () => {
  const {forumData, state, sortPosts} = useData();
  const {posts,  sortedData} = forumData;
  return (
    <div>
     <h3>{state.sortBy}</h3>
      {
        sortPosts(state.sortBy).map(post =>(
          <PostCard key={post.username}post={post} />
        ))
      }
    </div>
  )
}

export default Posts