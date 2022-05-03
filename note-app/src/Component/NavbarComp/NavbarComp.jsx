
import React  from 'react';
import "./NavbarComp.css";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContex';


const NavbarComp = () => {
 const {setUser,encodedToken} = useAuth();
 const navigate= useNavigate

 const logoutHandler=(e)=>{
     e.preventDefault();
     localStorage.removeItem('token');
     setUser(null)
 }

  return (
    <div>
       <div className="note-headers flex">
       <h1 className=" font-xl f-l p-s ml-l"><Link to='/' className='note-titles'>PlayX-Notes</Link></h1>
       <form className='Homebtn-form mt-s ' onSubmit={logoutHandler}>
<button className='homelogout-btn p-s' type='submit'>Logout</button>
       </form>
      </div>
    </div>
  )
}

export default NavbarComp