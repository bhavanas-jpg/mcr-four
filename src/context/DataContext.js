import { createContext, useContext, useReducer } from "react";
import DataReducer from "../reducer/DataReducer";
import {forumData} from "../data/forumData"

export const DataContext = createContext(null);

export const DataProvider =({children})=>{

  const {initialState, dataReducer} = DataReducer();
  const [state, dispatch] = useReducer(dataReducer, initialState);



    return(
        <DataContext.Provider value={{state,dispatch,
          forumData
        }}>
        {children}
       </DataContext.Provider>
    )

}

export const useData =()=> useContext(DataContext);

