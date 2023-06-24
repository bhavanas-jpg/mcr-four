import React from 'react';
import { FaComment,FaSortUp, FaSortDown ,FaShare,FaBookmark  } from 'react-icons/fa';
import { MdShare } from 'react-icons/md'
import { useData } from '../context/DataContext';
import { Link, useNavigate } from 'react-router-dom';

const PostCard = ({post}) => {
  console.log(post);
const {dispatch, state} = useData();
  const {
    postId,
    username, 
    picUrl, 
    tags, 
    postTitle, 
     postDescription,
    upvotes,
    downvotes,
    comments,
    isBookmarked
    
    } =post;
    const navigate = useNavigate();

    const currentPost= state.forumPosts.filter(post => post.username === username);

  console.log(state.forumPosts);

  return (
    <main className="post__container">
        <div className="post__sec">

       <div className="upvote__sec">
       <FaSortUp 
       onClick={()=>dispatch({type: "UPVOTE", payload: username})}
       className="sort__icon"/>
     {
      currentPost.map(({upvotes})=>  <span>{upvotes}</span> )
     }
      
      <FaSortDown
       onClick={()=>dispatch({type: "DOWNVOTE", payload: username})}
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
       
        <i
        onClick={()=>
       navigate(`/post/${username}`)
        }
        ><FaComment /></i>
        <i> <MdShare /></i>
        <i
        onClick={()=> dispatch({type:"BOOKMARK", payload:  postId})}
        ><FaBookmark /></i>
        </div>
        </div>
        </div>
        
      
  
    </main>
  )
}

export default PostCard