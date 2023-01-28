import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../redux/thunks/user.thunks";

import "./styles/styles.Register.css";

function Register() {
  let dispatch = useDispatch();
  const user = useSelector((state) => state);
  console.log(user);

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

  const handleCancel = () => {};

  const handleSubmit = () => {
    dispatch(registerUser(registerDetails));
  };
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerHeader">
          <span className="register">Register</span>
          <span className="back">
            <Link to="/">Back</Link>{" "}
          </span>
        </div>
        <div className="formWrapper">
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
            <button
              onClick={handleSubmit}
              className={user.loading ? "loading" : ""}
            >
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
