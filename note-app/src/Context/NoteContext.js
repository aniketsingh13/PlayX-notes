import { useState,createContext,useContext } from "react";



const NoteContext= createContext();

 const NoteProvider=({children})=>{
    

   const[notes,setNotes]=useState( [])


    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {children}
        </NoteContext.Provider>
    )
 }
 const useNote = () => useContext(NoteContext);

 export {useNote,NoteProvider}