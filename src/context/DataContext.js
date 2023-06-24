import { createContext, useContext, useReducer } from "react";
import DataReducer from "../reducer/DataReducer";

export const DataContext = createContext(null);

export const DataProvider =({children})=>{

  const {initialState, dataReducer} = DataReducer();
  const [state, dispatch] = useReducer(dataReducer, initialState);



    return(
        <DataContext.Provider value={{state,dispatch}}>
        {children}
       </DataContext.Provider>
    )

}

export const useData =()=> useContext(DataContext);

