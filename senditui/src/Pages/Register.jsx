import React from "react";
import "./styles/styles.Register.css";

function Register() {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerHeader">
          <span className="register">Register</span>
          <span className="back">Back</span>
        </div>
        <div className="formWrapper">
          <label htmlFor="firstname">Enter your firstname</label>
          <input type="text" />
          <label htmlFor="lastname">Enter your lastname</label>
          <input type="text" />

          <label htmlFor="email">Enter your email</label>
          <input type="email" />

          <label htmlFor="password">Enter your password</label>
          <input type="password" />

          <label htmlFor="password">Confirm your password</label>
          <input type="password" />
          <span className="btns">
            <button type="submit">Submit</button>
            <button>Cancel</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
