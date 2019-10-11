import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar';

const NavBar = (props) => {
  let nav = props.user ?
    <nav> 
      <div>
        <h1>BAD>BAD ʕง•ᴥ•ʔง</h1>
        <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      </div>
    </nav>
    :
    <nav> 
      <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </div>
    </nav>
  return (
    <div className='NavBar'>
      {nav}
    </div>
    
  );
};


export default NavBar