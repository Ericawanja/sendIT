import React from "react";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import "./styles/styles.Login.css";
import { loginUser } from "../redux/thunks/user.thunks";
import Alert from "../Components/Alert";
import { useEffect } from "react";
import { resetState } from "../redux/slices/user.slice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, user } = useSelector((state) => state);

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setLoginDetails({
      ...loginDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = () => {
    dispatch(loginUser(loginDetails));
  };

  const handleCancel = () => {
    setLoginDetails({
      email: "",
      password: "",
    });
    dispatch(resetState())
  };

  

  useEffect(() => {
    // if(user){
    //   navigate("/")
    // }
  }, [user]);
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginHeader">
          <span className="login">Login</span>
          <span className="back" onClick={handleCancel}>
            <Link to="/">Back</Link>
          </span>
        </div>
        <div className="loginForm">
          {error && <Alert message={error} />}
          <label htmlFor="email">Enter your Email</label>
          <input
            type="email"
            value={loginDetails.email}
            name="email"
            onChange={handleInputChange}
          />

          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            value={loginDetails.password}
            name="password"
            onChange={handleInputChange}
          />

          <span className="btns">
            <button type="submit" onClick={handleLogin}>
              Submit
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
