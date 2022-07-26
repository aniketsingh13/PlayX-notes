import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Mockman from "mockman-js";
import LandingPage from "../Page/LandingPage/LandingPage";
import { Archieve, Delete, Home, Login, NotFound, Signup } from "../Page";
import { RequireAuth } from "../Component/Index";

const RoutePath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/delete"
          element={
            <RequireAuth>
              <Delete />
            </RequireAuth>
          }
        />
        <Route
          path="/archieve"
          element={
            <RequireAuth>
              <Archieve />
            </RequireAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default RoutePath;
