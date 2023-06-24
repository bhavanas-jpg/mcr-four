import React from 'react'
import { useData } from '../context/DataContext';
import Sidebar from "./Sidebar";
import Posts from "./Posts";
import SortPosts from "./SortPosts"; 

const Home = () => {
  const {name, state} = useData();

  console.log(state.user_name);

  return (
    <main className="home__content">
        <div className="main">
      <div className="container">
       <Sidebar />
       <Posts />
       <SortPosts />
      </div>
    </div>
    </main>
  
  )
}

export default Home