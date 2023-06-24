import { createContext, useContext, useReducer } from "react";
import DataReducer from "../reducer/DataReducer";
import {forumData} from "../data/forumData"

export const DataContext = createContext(null);

export const DataProvider =({children})=>{

  const {initialState, dataReducer} = DataReducer();
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const {posts} = forumData;

  let sortedData;

  console.log(sortedData);

  const sortPosts=(sortTitle)=>{
    if(sortTitle === "Latest Posts"){
     sortedData = posts.sort((a, b)=> new Date(a.createdAt) - new Date(b.createdAt) );
    return sortedData;
    }
    else if(sortTitle ==="Upvoted Posts");
    sortedData = posts.sort((a, b)=> a.upvotes - b.upvotes );
    return sortedData;
   
  }




    return(
        <DataContext.Provider value={{state,dispatch,
          forumData,
          sortPosts,
          sortedData
        }}>
        {children}
       </DataContext.Provider>
    )

}

export const useData =()=> useContext(DataContext);

