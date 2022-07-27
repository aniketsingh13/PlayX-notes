import React from "react";
import "./NavbarComp.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContex";
import { useToast } from "../../Hooks/useToast";

const NavbarComp = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate;
  const {showToast} = useToast()

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setUser(null);
    showToast("success","loged out!");
    navigate("/");
  };

  return (
    <div>
      <div className="note-headers flex">
        <h1 className=" font-xl f-l p-s ml-l">
          <Link to="/" className="note-titles">
            PlayX-Notes
          </Link>
        </h1>
        <div className="Homebtn-form mt-s ">
          <button className="homelogout-btn p-s" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarComp;
