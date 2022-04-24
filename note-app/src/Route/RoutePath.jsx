import React from 'react'
import {Routes, Route} from "react-router-dom";
import Mockman from "mockman-js";
import LandingPage from '../Page/LandingPage/LandingPage';
import { Archieve, Delete, Home, Login, Page404, Signup } from '../Page';
const RoutePath = () => {
  return (
    <div>
        <Routes>
            <Route  path='/' element={<LandingPage />} />
            <Route  path='/home' element={<Home />} />
             <Route path='/delete' element={<Delete />} />
             <Route path='/archieve' element={<Archieve />} />
             <Route path='/mockman' element={<Mockman />} />
             <Route path="/login"    element={<Login />} />
             <Route path="/signup"  element={<Signup />} />
             <Route path="*"   element={<Page404 />} />
        </Routes>
    </div>
  )
}

export default RoutePath