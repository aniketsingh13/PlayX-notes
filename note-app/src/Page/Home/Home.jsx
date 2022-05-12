import React from 'react'
import "./Home.css"
import { Aside, Main,Notecard } from '../../Component/Index';
import NavbarComp from '../../Component/NavbarComp/NavbarComp';

import { useNote } from '../../Context/NoteContext';



const Home = () => {
  const {noteState} = useNote();
  const {notes} = noteState;
  let pinnedNotes = notes.filter((note) => note.pinned);
  let unPinnedNotes = notes.filter(note => !note.pinned)
  return (
    <div>
       <main className='main-container'>
      <NavbarComp />
      <div className='flex'>
       <div className='aside-container'>
        <Aside />
       </div>
       <div className='center-container'>
         <Main />
       </div>
      </div>
      <div className=' mt-l '>
        {pinnedNotes.length > 0 && (<>
        <h3 className='pinned-notes f-l font-xl ml-l '>Pinned </h3>
        <div className='note-card flex flex-wrap'>
        {pinnedNotes.map((note) => (
          <Notecard key={note._id} notes={note}/>
        ))}
        </div>
        </>)
         }
         {
           unPinnedNotes.length > 0 && (<>
           <h3 className='unpinned-note f-l font-xl mt-s ml-l'>Other </h3>
           <div className='note-card flex flex-wrap '>
           {unPinnedNotes.map((note) => (
          <Notecard key={note._id} notes={note}/>
        ))}
           </div>
           </>)
         }
       </div >
       <div className='flex flex-center '>
       {!notes.length && (
         <div className='emptyNotemessage font-xl f-l'>your notes appear here 😀</div>
       )}
       </div>
      </main>
    </div>
  )
}

export default Home