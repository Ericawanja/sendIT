import React, { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Alert from "../Components/Alert";
import { registerUser } from "../redux/thunks/user.thunks";

import "./styles/styles.Register.css";
import { resetState } from "../redux/slices/user.slice";

function Register() {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, registered } = useSelector((state) => state);

  const [registerDetails, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setDetails({ ...registerDetails, [name]: value });
  };

  const handleCancel = () => {
    setDetails({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    dispatch(resetState());
  };

  const handleSubmit = () => {
    dispatch(registerUser(registerDetails));
  };

 

  useEffect(() => {
    if (registered) {
      navigate("/login");
    }
  }, [registered]);
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerHeader">
          <span className="register">Register</span>
          <span className="back" onClick={handleCancel}>
            <Link to="/">Back</Link>{" "}
          </span>
        </div>
        <div className="formWrapper">
          {error && <Alert message={error} />}
          <label htmlFor="firstname">Enter your firstname</label>
          <input
            type="text"
            name="firstname"
            value={registerDetails.firstname}
            onChange={handleInputChange}
          />

          <label htmlFor="lastname">Enter your lastname</label>
          <input
            type="text"
            name="lastname"
            value={registerDetails.lastname}
            onChange={handleInputChange}
          />

          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            value={registerDetails.email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name="password"
            value={registerDetails.password}
            onChange={handleInputChange}
          />

          <label htmlFor="password">Confirm your password</label>
          <input
            type="password"
            name="confirmPassword"
            value={registerDetails.confirmPassword}
            onChange={handleInputChange}
          />
          <span className="btns">
            <button onClick={handleSubmit} className={loading ? "loading" : ""}>
              Submit
            </button>
            <button onClick={handleCancel}>Cancel</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
