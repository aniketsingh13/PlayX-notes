import {createContext,useContext,useReducer} from "react";
import { filterReducer } from "../Reducer";


const FilterContext = createContext();

const FilterProvider = ({children}) =>{

const [filterState,filterDispatch] = useReducer(filterReducer,{
    priorities: [],
    sortByDate: "",
    tags: []
})
    return(
        <FilterContext.Provider value={{filterState,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}
const useFilter = () => useContext(FilterContext);

export {useFilter,FilterProvider}