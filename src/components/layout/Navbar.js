import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = ({icon, title}) => {

  return(
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon}> </i>
        {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;