import React from 'react'
import { useData } from '../context/DataContext';

const Home = () => {
  const {name, state} = useData();

  console.log(state.user_name);

  return (
    <div>Home</div>
  )
}

export default Home