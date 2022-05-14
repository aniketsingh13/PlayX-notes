import React from 'react'
import { Archieved, Aside, Navbar } from '../../Component/Index';
import { useNote } from '../../Context/NoteContext';
import "./Archieve.css";

const Archieve = () => {
  const {noteState} = useNote()
  const {archives} = noteState;
  return (
    <div>
      <Navbar />
        <div className='flex'>
          <div className='archieve_aside'>
            <Aside />
          </div>
          <div className='archieve-center flex flex-row'>
            {
              archives.map(note => (
                <Archieved key={note._id} archives={note} />
              ))
            }
          </div>
        </div>
        {!archives.length && (
          <div className='flex flex-center font-l f-l archieve-display'>Your Archieve card show here 😀</div>
        )}
    </div>
  )
}

export default Archieve