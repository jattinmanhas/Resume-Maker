import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { useUserContext } from "../context/userContext";

function Button() {
  const { user, logoutUser } = useUserContext();
  return (
    <Link to='sign-up'>
      {/* <button className='btn'>{user ? "Sign In" : "Sign Out"}</button> */}
      {user ? <button onClick={logoutUser}>Log out</button>:<button className='btn'> Sign In</button> }
    </Link>
  );
}

export default Button;