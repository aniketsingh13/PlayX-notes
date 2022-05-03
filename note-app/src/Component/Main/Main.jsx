import React, { useReducer } from 'react'
import "./Main.css";
import {IoMdColorPalette} from "react-icons/io";
import {MdOutlineNewLabel} from "react-icons/md";
import setnoteReducer from '../../Reducer/setnoteReducer';
import { useNote } from '../../Context/NoteContext';
import { useAuth } from '../../Context/AuthContex';
import {v4 as uuid} from "uuid";
import axios from "axios";





const Main = () => {
  const[state,dispatch] = useReducer(setnoteReducer,{
    title: '',
    text: '',
  })
  const {title,text} = state;
   const {notes,setNotes} = useNote();
  const {encodedToken} = useAuth()
  
   const saveNoteHandler = async(e)=>{
          e.preventDefault()
          const newNote={
            _id: uuid(),
            title,
            text
          };
          try{
          const response= await axios.post(
            "/api/notes",
            {note: newNote},
            {
              headers:{
                authorization: encodedToken
              }
            }
          )
          if(response.status === 201){
            setNotes(response.data.notes)
            dispatch({type: "RESET"})
          }  
          }catch(error){
           console.log(error.response)
          }
   }





  return (
    <div className='mt-l flex flex-center'>
      <form className='note-edittor flex flex-column mt-s ' onSubmit={saveNoteHandler}>
     <input type="text" placeholder='Title' className='noteEditor-input mt-s p-s f-s' name='Title'
      value={title}
      onChange={(e) => dispatch({type: "TITLE",payload: e.target.value})}
      required
     />
     <textarea type='text'placeholder='Take a note'  className='noteEditor-textarea  f-s p-s' cols="18" rows="3"
      value={text}
      onChange={(e) => dispatch({type:"TEXT",payload: e.target.value})}
     ></textarea>
     <div className='flex editorbtn-container mb-s'>
       <div>
       <button className='editorIcon-btn f-m ml-s'><IoMdColorPalette /></button>
       <button className='editorIcon-btn f-m ml-s'><MdOutlineNewLabel /></button>
       </div>
       <div>
         <button className='editorNormal-btn  mr-s'type='submit' >Add</button>
       </div>
     </div>
     
      </form>
    </div>
  )
}

export default Main