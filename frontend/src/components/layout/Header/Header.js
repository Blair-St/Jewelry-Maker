import React from 'react';
import { GiHeartNecklace } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <div className='div-header'>
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <NavLink to='/'><GiHeartNecklace className='div-svg'/></NavLink>
          <div className='div-title'>
        <NavLink to='/' style={{textDecoration:'none'}}><h1>Jewelry Manager</h1></NavLink>
        </div>
        </div>
        
        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <div className='div-title'>
            <NavLink to='/mymaterials' style={{textDecoration:'none'}}><h2>My Materials</h2></NavLink>
          </div>
          <div className='div-title'>
            <NavLink to='/myprojects' style={{textDecoration:'none'}}><h2>My Projects</h2></NavLink>
          </div>
            <div className='div-title'>
              <NavLink to='/myproducts' style={{textDecoration:'none'}}><h2>My Products</h2></NavLink>
            </div>
            
          <NavLink to='/signin'><FiLogIn className='div-svg'/></NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;