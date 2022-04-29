import React from 'react'
import "./Home.css"
import { Aside, Main,Notecard } from '../../Component/Index';
import NavbarComp from '../../Component/NavbarComp/NavbarComp';

import { useNote } from '../../Context/NoteContext';



const Home = () => {
  const {notes} = useNote();
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
      <div className='note-card flex flex-wrap mb-xl'>
        {notes.length > 0 && (<>
        {notes.map((note) => (
          <Notecard key={note._id} notes={note}/>
        ))}
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