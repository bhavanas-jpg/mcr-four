import React from 'react'
import PostCard from '../components/PostCard';
import { useData } from '../context/DataContext';

const Posts = () => {
  const {forumData} = useData();
  const {posts} = forumData;
  return (
    <div>
      {
        posts.map(post =>(
          <PostCard key={post.username}post={post} />
        ))
      }
    </div>
  )
}

export default Posts