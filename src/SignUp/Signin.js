import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import "./Signup.scss"
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

  const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re)=>{
      console.log(re);
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  return (
    <div className="form-signup">
      <Link to='/' className='navbar-logo' style={{textAlign: "center", display:"block", paddingBottom: "1rem", color: "rgb(81, 81, 255)"}}>
          RESUME
          <i style={{color: "rgb(81, 81, 255)"}} class='fab fa-firstdraft' />
        </Link>
      <h2 className="signup__header" > Login </h2>
      <form onSubmit={onSubmit}>
        <input className="login--input" placeholder="Email" type="email" ref={emailRef} />
        <input className="login--input" placeholder="Password" type="password" ref={psdRef} />
        <button className="btn-signup" type="submit">Sign In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
        <div onClick={signInWithGoogle} class="google-btn">
          <div class="google-icon-wrapper">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>
          <p class="btn-text">Sign in with google</p>
        </div>
        {/* <button onClick={signInWithGoogle} className="btn-signup">Google Signin</button> */}
      <Link to="/phoneSignUp">
      <button className="btn-signup"  >Sign In with Phone Number</button>
      </Link>
      </form>
    </div>
  );
};

export default Signin;