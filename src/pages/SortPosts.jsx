import React, { useState } from 'react';
import { FaSortDown } from "react-icons/fa"
import { useData } from '../context/DataContext';

const SortPosts = () => {
  const [showsort, setShowSort] = useState(false);
  const { sortPosts, dispatch ,state} = useData();
  const sortTitle = ["Latest Posts", "Upvoted Posts"];




  return (
    <div>
      <h3>Sort By</h3>

      <p onClick={() => setShowSort(!showsort)}>{state.sortBy} <FaSortDown /> </p>
      {
        showsort &&
        <ul className="dropdown__content">
          {
            sortTitle.map(title => (
              <li onClick={() => {
                dispatch({
                  type: "FILTER__TYPE",
                  payload: title
                })
                setShowSort(false)
              }}>{title}</li>
            )
            )
          }

        </ul>
      }



    </div>
  )
}

export default SortPosts