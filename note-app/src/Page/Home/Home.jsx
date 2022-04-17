import React from 'react'
import "./Home.css"
import { Aside, Main, Navbar,Notecard } from '../../Component/Index';



const Home = () => {
  return (
    <div>
       <main className='main-container'>
      <Navbar />
      <div className='flex'>
       <div className='aside-container'>
        <Aside />
       </div>
       <div className='center-container'>
         <Main />
       </div>
      </div>
      <div>
      <Notecard />
      </div>

      </main>
    </div>
  )
}

export default Home