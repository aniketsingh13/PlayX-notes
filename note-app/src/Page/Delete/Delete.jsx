import React from 'react';
import "./Delete.css"
import {Aside, Navbar, Trashcard} from "../../Component/Index";
import { useNote } from '../../Context/NoteContext';

const Delete = () => {
  const {noteState} = useNote();
  const {trash} = noteState;
  return (
    <div>
     <Navbar />
     <div className='flex'>
       <div className='delete_aside'>
       <Aside />
       </div>
       <div className='delete_center flex flex-row'>
        {
        trash.map(note => (
           <Trashcard key={note._id} trash={note} />
        ))
        }
       </div>
     </div>
     {!trash.length && (
       <div className=' flex flex-center font-l f-l Delete_display'>Your Trash card show here 😀</div>
     )}
    </div>
  )
}

export default Delete