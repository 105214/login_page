import React, { useState } from 'react'
import eye from './image/eye.png'
import closedeye from './image/closedeye.png'
import './login.css'
const Login = () => {

  const [passwordVisible,setPasswordVisible]=useState(false)
  const [email,setEmail]=useState("")

  const togglePassword=()=>{
setPasswordVisible(!passwordVisible)
  }

  
  return (
    <div>
      <div className="login-box">
        <div className="bg-layer"></div>
        <div className="login-form">
       <h2 className="login-heading">Login</h2>
      <input type="email" value={email} placeholder='enter your email' onChange={(e)=>setEmail(e.target.value)}  />
      <input type={passwordVisible ? 'text' : 'password'} placeholder='enter your password' />
      <img src={passwordVisible? eye : closedeye } alt='visibility' className='eye' onClick={togglePassword} />
    
      {email && <button className='submit-btn' >Login</button>}
        </div>
      </div>
     
    </div>
  )
}

export default Login
