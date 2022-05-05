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
  const colorpalletColors=[
    {id:uuid(),color: ''},
    {id: uuid(), color: "pink"},
  {id: uuid(), color: "yellow"},
  {id: uuid(), color: "green"},
  {id: uuid(), color: "skyBlue"},
  {id: uuid(), color: "purple"}
]
const tagPallets = [
  {id: uuid(), tag: ''},
  {id: uuid(), tag: "Work"},
  {id: uuid(), tag: "Important"},
  {id: uuid(), tag: "Secondary"},
  {id: uuid(), tag: "Chores"},
  {id: uuid(), tag: "College"}
]
  const[state,dispatch] = useReducer(setnoteReducer,{
    title: '',
    text: '',
    noteColor: '',
    colorPalletVisible: false,
    tags: '',
    tagPalletVisible: false
  })
  const {title,text,colorPalletVisible,noteColor,tags,tagPalletVisible} = state;
   const {setNotes} = useNote();
  const {encodedToken} = useAuth()
 
  
   const saveNoteHandler = async(e)=>{
          e.preventDefault()
          const newNote={
            _id: uuid(),
            title,
            text,
            noteColor,
            tags
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
          console.log(response.data)
          if(response.status === 201){
            setNotes(response.data.notes)
            dispatch({type: "RESET"})
          }  
          }catch(error){
           console.log(error.response)
          }
   }





  return (
    <div className='mt-l flex flex-center' >
      <form className={`note-edittor note-color-${noteColor} flex flex-column mt-s ` } onSubmit={saveNoteHandler}>
     <input type="text" placeholder='Title' className={`noteEditor-input mt-s p-s f-s  note-color-${noteColor}`} name='Title'
      value={title}
      onChange={(e) => dispatch({type: "TITLE",payload: e.target.value})}
      required
     />
     <textarea type='text'placeholder='Take a note'  className={`noteEditor-textarea  f-s p-s note-color-${noteColor}`} cols="18" rows="3"
      value={text}
      onChange={(e) => dispatch({type:"TEXT",payload: e.target.value})}
     ></textarea>
     <div className='flex editorbtn-container mb-s'>
       <div className='flex'>
 <div className='editorIcon-btn f-m ml-s' onClick={() => dispatch({type: "COLORPALLET"})}><IoMdColorPalette /></div>
 {colorPalletVisible && (
         <div className='notePallet-container flex '>
          {
            colorpalletColors.map(({id,color}) =>(
              <div
              key={id}
              className={`note-color note-color-${color}`}
              onClick={() => dispatch({type: "SETNOTE_COLOR",payload: color})}
              >
                </div>
            ) )
          }
         </div>
       )}
       <div className='editorIcon-btn f-m ml-s' onClick={() => dispatch({type: "TAGPALLET"})}><MdOutlineNewLabel /></div>
       {tagPalletVisible && (
         <div className='tagPallet-container flex'>
         {
           tagPallets.map(({id,tag}) =>(
            <div key={id}
              className='tagCont f-s font-l'
               onClick={() => dispatch({type: "SET_TAG",payload: tag})}
            >
              {tag}
            </div>
           ))
         }
         </div>
       )}
         {tags !== '' && <div className='displayTags mt-s ml-s f-s font-l p-xs'>{tags}</div>}
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