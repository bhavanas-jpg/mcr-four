import React from 'react'
import { useParams } from 'react-router-dom'
import PostCard from '../components/PostCard';
import { useData } from '../context/DataContext';

const PostDetail = () => {
    const {username }= useParams();
   const {forumData} = useData();
   const post = forumData.posts.filter((post) => post.username === username)
    console.log(username , "param post");

  return (
    <div>
        <PostCard post={post}/>
    </div>
  )
}

export default PostDetail