import React from 'react'
import "./Home.css"
import { Aside, Main, Navbar,Notecard } from '../../Component/Index';
import NavbarComp from '../../Component/NavbarComp/NavbarComp';



const Home = () => {
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
      </main>
    </div>
  )
}

export default Home