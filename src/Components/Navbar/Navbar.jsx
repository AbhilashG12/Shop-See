import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
   <div className='navbar'>
    <div className='nav-logo'>
    <img src={logo} alt="" />
    <p>Shop-See</p>

    </div>
    <ul className='nav-menu'>
      <li onClick={()=>{setMenu("Shops")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link></li>
      <li onClick={()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/Mens'>Men</Link></li>
      <li onClick={()=>{setMenu("Womens")}}><Link style={{textDecoration:'none'}} to='/Womens'>Women</Link></li>
      <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link></li>
    </ul>
    <div className='nav-login-cart'>
    <Link to='/login'><button id='btn'>Login</button></Link>
    <Link to='/cart'><img src={cart_icon} alt="" id='cart1' /></Link>
    <div className='nav-cart-count'>{getTotalCartItems}</div>
    </div>
   </div> 
    
  )
}

export default Navbar
