import React from 'react'
import { useParams } from 'react-router-dom'
import PostCard from '../components/PostCard';
import { useData } from '../context/DataContext';

const PostDetail = () => {
    const {username }= useParams();
   const {forumData} = useData();
   const posts = forumData.posts.filter((post) => post.username === username)
    console.log(username , "param post");

  return (
    <div>
        {
            posts.map(post => 
                <PostCard post={post}/>
                )
        }
        
    </div>
  )
}

export default PostDetail