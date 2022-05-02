import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import "./Signup.css"
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
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input className="login--input" placeholder="Email" type="email" ref={emailRef} />
        <input className="login--input" placeholder="Password" type="password" ref={psdRef} />
        <button className="btn-signup" type="submit">Sign In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
        <button onClick={signInWithGoogle} className="btn-signup">Google Signin</button>
      <Link to="/phoneSignUp">
      <button className="btn-signup">Sign In with Phone Number</button>
      </Link>
      </form>
    </div>
  );
};

export default Signin;