import React from 'react';
import "./Login.css";
import Navbar from "../../../Component/Navbar/Navbar"
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
        <Navbar />
        <div className="login-container flex flex-center mt-l">
        <form className="login-form  pt-l">
            <div className="f-m font-xxl mb-s">Login</div>
            <div className=" mt-l ">
                <label  className="login-email-label font-s">Email Address</label>
                <input type="text" className="f-s mt-s " name="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="mt-l">
                <label  className="login-email-label font-s">Password</label>
                <input type="text" className="f-s  mt-s " name="email" id="email" placeholder="Enter your password" />
            </div>
            <div className="mt-l flex">
                <input type="checkbox" id="remember" name="remember" className="login-checkbox" />
                <label  className="font-xs f-s">Remember me</label>
                <h3 className="login-text pl-s font-xs">Forgot your password?</h3>
            </div>
            <div className="mt-l">
                <button className="login-btn f-s">Login</button>
            </div>
            <div className="mt-l">
                <button className="loginGuest-btn f-s">Login as Guest</button>
            </div>
            <div className="mt-l mb-l">
                <Link to='/signup' className='f-s'>Create New Account</Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login