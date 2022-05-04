import React, { useState } from 'react';
import  Button  from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './DropdownTools';
import { useUserContext } from "../context/userContext";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { user, logoutUser } = useUserContext();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar no-print'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          RESUME
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
              {user ? <button onClick={logoutUser}>Log out</button>:<button className='btn'> Sign In</button> }
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;