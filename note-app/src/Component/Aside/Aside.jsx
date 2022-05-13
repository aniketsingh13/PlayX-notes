import React from 'react'
import "./Aside.css";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {BsArchiveFill} from "react-icons/bs";
import {MdDelete} from "react-icons/md";



const Aside = () => {
  return (
    <div className=' mt-l'>
      <ul className='flex flex-center'>
     <button className='aside-Btn f-m font-l'> <Link to='/home' className='home-link'><FaHome className='f-m pt-s mr-s'/>Home</Link></button>
     <button className='aside-Btn f-m font-l mt-m'> <Link to='/archieve' className='home-link'><BsArchiveFill className='f-m pt-s mr-s'/>Archieve</Link></button>
     <button className='aside-Btn f-m font-l mt-m'> <Link to='/delete' className='home-link'><MdDelete className='f-m pt-s mr-s'/>Trash</Link></button>
    </ul>
      
        
    </div>
  )
}

export default Aside