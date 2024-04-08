import React from 'react'
import './CSS/Loginsignup.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    
    <div className='loginsignup'>
 
    <div className="loginsignup-container">
      <h1>Login</h1>
      <div className='loginsignup-fields'>
        <input type="email" placeholder='Enter Email Address'/>
        <input type="password" placeholder='Enter Password' />
      </div>
      <button type='submit'>Login</button>
      <p className="loginsignup-login">No Account?  <Link to="/signup"> <button id='loginbtn'>Signup Here</button> </Link></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing,I agree to the terms of use & privacy policy</p>
      </div>
    </div>

  </div>

  )
}

export default Login