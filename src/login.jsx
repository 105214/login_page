import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div>
      <div className="login-box">
        <div className="bg-layer"></div>
        <div className="login-form">

      <input type="email" placeholder='enter your email'/>
      <input type="password" placeholder='enter your password' />
      <button>Login</button>
        </div>
      </div>
     
    </div>
  )
}

export default Login
