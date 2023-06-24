import React from 'react';
import { FaComment,FaSortUp, FaSortDown ,FaShare,FaBookmark  } from 'react-icons/fa';
import { MdShare } from 'react-icons/md'

const PostCard = ({post}) => {
  console.log(post);

  const {username, picUrl, 
    tags, 
    postTitle, 
     postDescription,
    upvotes,
    downvotes,
    comments,
    isBookmarked
    
    } =post

  return (
    <main className="post__container">
        <div className="post__sec">

       <div className="upvote__sec">
       <FaSortUp className="sort__icon"/>
       <span>123</span> 
      <FaSortDown
      className="sort__icon" />
       </div>
        <div>
        <div className="d-flx ">
       <div><img  className="profile-picture" src={picUrl} alt="" /></div>
       <div className='ml-1'>
       <p>Posted by <span className="username">{username}</span></p>
       </div>
       </div>
       <h3 className="mt-1 ">{postTitle}</h3>
       {
        tags.map(tag =>(
            <span 
            className="tag"
            key={tag}>{tag}</span>
        ))
       }
       <p className="post__desc">{postDescription}</p>
        <div className="action__icons">
       
        <i><FaComment /></i>
        <i> <MdShare /></i>
        <i
        
        ><FaBookmark /></i>
        </div>
        </div>
        </div>
        
      
  
    </main>
  )
}

export default PostCard