import React from 'react';
import "./Signup.css";
import {Navbar} from "../../../Component/Index";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
        <Navbar />
    <div className="Signup-container flex flex-center mt-l">
        <form className="Signup-form  pt-l">
            <div className="f-m font-xxl mb-s">Signup</div>
            <div className=" mt-l ">
                <label  className="Signup-email-label font-s">Email Address</label>
                <input type="text" className="f-s mt-s " name="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="mt-l">
                <label  className="Signup-email-label font-s">Password</label>
                <input type="text" className="f-s  mt-s " name="email" id="email" placeholder="Enter your password" />
            </div>
            <div className="mt-l flex">
                <input type="checkbox" id="remember" name="remember" className="Signup-checkbox" />
                <label  className="Signup-text font-l f-s pl-s">I accept all term & conditions</label>
            </div>
            <div className="mt-l">
                <button className="Signup-btn f-s">Create New Account</button>
            </div>
            <div className="mt-l mb-l">
               <Link to='/login' className='f-s' >Already have an account</Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Signup