import { useReducer,createContext,useContext } from "react";
import { noteReducer } from "../Reducer/noteReducer";



const NoteContext= createContext();

 const NoteProvider=({children})=>{
    

   const[noteState,noteDispatch]=useReducer(noteReducer,{
       notes:[],
       archives : [],
       trash : []
   })


    return(
        <NoteContext.Provider value={{noteState,noteDispatch}}>
            {children}
        </NoteContext.Provider>
    )
 }
 const useNote = () => useContext(NoteContext);

 export {useNote,NoteProvider}