import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/styles.Login.css"

function Login() {
  return (
    <div className="loginContainer">
       <div className="loginWrapper">
        <div className="loginHeader">
          <span className='login'>Login</span>
          <span className='back'><Link to="/">Back</Link></span>
        </div>
        <div className="loginForm">
          <label htmlFor="email">Enter your Emai</label>
          <input type="email" />

          <label htmlFor="password">Enter your password</label>
          <input type="password" />

          <span className="btns">
            <button type="submit">Submit</button>
            <button>Cancel</button>
          </span>
        </div>
        </div>       
    </div>
  )
}

export default Login