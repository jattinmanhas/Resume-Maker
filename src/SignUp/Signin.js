import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import "./Signup.scss"
import { Link } from "react-router-dom";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  

  return (
    <div className="form-signup">
      <Link to='/' style={{textAlign: "center", display:"block", paddingBottom: "1rem", color: "rgb(81, 81, 255)", textDecoration:"none", fontSize:"1.5rem", fontWeight:"bold"}}>
          RESUME
          <i style={{color: "rgb(81, 81, 255)"}} class='fab fa-firstdraft' />
        </Link>
      <h2 className="signup__header" > Login </h2>
      <form onSubmit={onSubmit}>
        <input className="login--input" placeholder="Email" type="email" ref={emailRef} />
        <input className="login--input" placeholder="Password" type="password" ref={psdRef} />
        <button className="btn-signup" type="submit">Sign In</button>
        <p style={{ display:"block", textAlign:"center" }} onClick={forgotPasswordHandler}>Forgot Password?</p>
        
      </form>
    </div>
  );
};

export default Signin;