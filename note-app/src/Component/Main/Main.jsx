import React from 'react'
import "./Main.css";
import {IoMdColorPalette} from "react-icons/io";
import {MdOutlineNewLabel} from "react-icons/md";

const Main = () => {
  return (
    <div className='mt-l flex flex-center'>
      <section className='note-edittor flex flex-column mt-s '>
     <input type="text" placeholder='Title' className='noteEditor-input mt-s p-s f-s' name='Title'/>
     <textarea type='text'placeholder='Take a note'  className='noteEditor-textarea  f-s p-s' cols="18" rows="3"></textarea>
     <div className='flex editorbtn-container mb-s'>
       <div>
       <button className='editorIcon-btn f-m ml-s'><IoMdColorPalette /></button>
       <button className='editorIcon-btn f-m ml-s'><MdOutlineNewLabel /></button>
       </div>
       <div>
         <button className='editorNormal-btn  mr-s'>add</button>
       </div>
     </div>
      </section>
    </div>
  )
}

export default Main