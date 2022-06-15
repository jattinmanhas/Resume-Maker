import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useUserContext } from "../context/userContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const { user, logoutUser } = useUserContext();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar no-print'>
        <Link style={{color: "rgb(81, 81, 255)", fontWeight:"bold"}} to='/' className='navbar-logo' onClick={closeMobileMenu}>
          RESUME
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
          >
            <Link
              to='/resume'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Resume 
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>

          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Career Blogs
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/sign-up'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              {user ? <li onClick={logoutUser}>Log out</li>:<li> Sign In</li> }
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;