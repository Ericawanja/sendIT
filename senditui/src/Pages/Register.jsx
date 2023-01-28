import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles/styles.Register.css";

function Register() {
  const registerDetails = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""
  })

  const handleInputChange = (event)=>{

  }

  const handleCancel = () =>{

  }

  const handleSubmit = ()=>{
    
  }
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerHeader">
          <span className="register">Register</span>
          <span className="back"><Link to="/">Back</Link> </span>
        </div>
        <div className="formWrapper">
          <label htmlFor="firstname">Enter your firstname</label>
          <input type="text" name="firstname" value={registerDetails.firstname} onChange = {handleInputChange} />

          <label htmlFor="lastname">Enter your lastname</label>
          <input type="text" name="lastname" value={registerDetails.lastname} onChange = {handleInputChange} />

          <label htmlFor="email">Enter your email</label>
          <input type="email" name="email" value={registerDetails.email} onChange = {handleInputChange} />

          <label htmlFor="password">Enter your password</label>
          <input type="password"  name="password" value={registerDetails.password} onChange = {handleInputChange}/>

          <label htmlFor="password">Confirm your password</label>
          <input type="password"  name="confirmPassword" value={registerDetails.confirmPassword} onChange = {handleInputChange}/>
          <span className="btns">
            <button onClick = {handleSubmit}>Submit</button>
            <button onClick = {handleCancel}>Cancel</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
