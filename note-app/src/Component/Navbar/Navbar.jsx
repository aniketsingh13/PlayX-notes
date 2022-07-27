import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="note-header">
        <h1 className=" font-xl f-l p-s ml-l">
          <Link to="/" className="note-title">
            PlayX-Notes
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
