import "./LandingPage.css";
import { Link } from 'react-router-dom';
import React from 'react'
import { Navbar } from "../../Component/Index";

const LandingPage = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="center-container flex flex-row mt-l">
         <div className="noteText-container mr-l">
           <h2 className="font-xl f-l noteText-header mb-s">Meet your modern</h2>
           <h3 className="font-l f-m mt-s mb-l">Note Taking App</h3>
           <h4 className="note-text font-l f-m mb-l">Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</h4>
           <Link to='/Login'> <button className="note-btn mt-s p-s f-s">Join Now</button></Link>
         </div>
         <div className="noteImg-div ">
           <img src="https://res.cloudinary.com/aniket-singh/image/upload/v1649999867/Images/undraw_notes_re_pxhw_rjm16h.svg" alt="note image" className="note-img" />
         </div>
      </div>

    </div>
  )
}

export default LandingPage