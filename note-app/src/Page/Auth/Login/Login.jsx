import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../../Component/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContex";
import axios from "axios";
import {useToast} from "../../../Hooks/useToast"
import { useDocumentTitle } from "../../../Hooks/useDocumetTitle";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {showToast} = useToast();
   useDocumentTitle("login");
  

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/auth/login", {
        email,
        password,
      });
      setUser(response.data.foundUser);
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/home");
      showToast("success", "Logged In!");
    } catch (error) {
      showToast("error", error.response.data.errors[0]);
      setError("something went worng 🥺");
    }
  };

  const guestLoginHandler = () => {
    setEmail("aniketsingh@gmail.com");
    setPassword("aniketsingh123");
  };
  const disablefield = email !== "" && password !== "";

  return (
    <div>
      <Navbar />
      <div className="login-container flex flex-center mt-l">
        <form className="login-form  pt-l" onSubmit={loginHandler}>
          <div className="f-m font-xxl mb-s">Login</div>
          <div className=" mt-l ">
            <label className="login-email-label font-s">Username</label>
            <input
              type="text"
              className="f-s mt-s "
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-l">
            <label className="login-email-label font-s">Password</label>
            <input
              type={showPass ? "text" : "password"}
              className="f-s  mt-s "
              name="email"
              id="pass"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-s">{error}</div>
          <div className="mt-l flex">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="login-checkbox pt-s"
              checked={showPass}
              onChange={(e) => setShowPass(!showPass)}
            />
            <label className="font-xs f-s pl-s"> Show password</label>
            <h3 className="login-text pl-s font-xs">Forgot your password?</h3>
          </div>
          <div className="mt-l">
            <button
              className="login-btn f-s"
              type="submit"
              disabled={!disablefield}
            >
              Login
            </button>
          </div>
          <div className="mt-l">
            <div
              className="loginGuest-btn f-s p-xss"
              onClick={guestLoginHandler}
            >
              Login as Guest
            </div>
          </div>
          <div className="mt-l mb-l">
            <Link to="/signup" className="f-s font-l">
              Create New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
