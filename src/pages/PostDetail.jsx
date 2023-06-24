import React from 'react'
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const post = useParams();

    console.log(post , "param post");

  return (
    <div>PostDetail</div>
  )
}

export default PostDetail