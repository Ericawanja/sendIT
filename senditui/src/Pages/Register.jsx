import React from 'react'

function Register() {
  return (
    <div className='registerContainer'>
        <div className="header">
            <span>Register</span>
            <span>Back</span>
        </div>
        <div className="formWrapper">
            <label htmlFor="firstname">Enter your firstname</label>
            <input type="text" />
            <label htmlFor="lastname">Enter your lastname</label>

            <label htmlFor="email">Enter your email</label>
            <input type="email" />

            <label htmlFor=""></label>
        </div>

    </div>
  )
}

export default Register