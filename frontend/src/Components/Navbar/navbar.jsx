import React,{ useContext, useEffect, useState } from 'react'
import './navbar.css'
import logo from '../Assests/logo.jpg'
import shoppingcart from '../Assests/shoppingcart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
//navbar
  const [menu,setMenu] = useState("Hemo Decor");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className="nav-bar"> 
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}> <Link style={{textDecoration:'none'}} to='/'>Home</Link> {menu==="Home"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Home Decor")}}> <Link style={{textDecoration:'none'}} to='/homedecor'>Home Decor</Link> {menu==="Home Decor"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Environment")}}> <Link style={{textDecoration:'none'}} to='/Environment'>Environment</Link> {menu==="Environment"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Garden and Outdoors")}}> <Link style={{textDecoration:'none'}} to='/GardenandOutdoors'>Garden and Outdoors</Link> {menu==="Garden and Outdoors"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Kids")}}> <Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link>  {menu==="Kids"?<hr/>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
           <Link to="/signup"> <button>Login</button> </Link>
           <Link to="/cart"> <img src={shoppingcart} alt="" /> </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
