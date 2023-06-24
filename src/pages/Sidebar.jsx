import React from 'react';
import { FaHome, FaCompass, FaUser, FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

const Sidebar = () => {
  const {forumData} = useData();
  const{username, name, picUrl} = forumData;
  return (
    <div className="sidebar">
      <div className="sidebar__content">
      <div> <FaHome /><Link to="/" className="link active" >Home</Link ></div>
      <div> <FaCompass /><Link className="link" > Explore</Link></div>
      <div> <FaBookmark /><Link className="link" >Bookmarks</Link></div>
      <div>  <FaUser /><Link className="link" >Profile</Link></div>
      </div>

      <div className="d-flx user__info">
       <div><img  className="profile-picture" src={picUrl} alt="" /></div>
       <div className='ml-1'>
        <p>{name}</p>
        <p className="username">{username}</p>
       </div>
      </div>
    </div>
  )
}

export default Sidebar;


