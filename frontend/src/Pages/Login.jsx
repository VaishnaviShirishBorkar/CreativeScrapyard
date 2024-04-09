import React, {useState, useContext} from 'react'
import './CSS/Loginsignup.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {ShopContext} from '../Context/ShopContext';

const Login = () => {
  const navigate = useNavigate();
  const {getTotalCartAmount,all_products,cartItems,removeFromCart} = useContext(ShopContext);

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email : email, password : password})
    .then(res => {
      console.log(res);
      if(res.data === "Success"){
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/');
      }
    })
    .catch(err => console.log(err));
  }

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  return (
    
    <div className='loginsignup'>
 
    <div className="loginsignup-container">
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
      <div className='loginsignup-fields'>
        <input type="email" placeholder='Enter Email Address' onChange={(e) => {setEmail(e.target.value)}} name='email' />
        <input type="password" placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}} name='password'/>
      </div>
      <button type='submit'>Login</button>
      <p className="loginsignup-login">No Account? <Link to="/signup"> <button type='submit' id='loginbtn'>Signup Here</button> </Link></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing,I agree to the terms of use & privacy policy</p>
      </div>
      </form>
    </div>

  </div>

  )
}

export default Login