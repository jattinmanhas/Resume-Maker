// import { useState, useEffect } from "react";
// import "./Signup.css";

// function Signup() {
//   const initialValues = { email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);

//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };

//   return (
//     <div className="signup__container">
//       <form className="signup__form" onSubmit={handleSubmit}>
//         <h1>
//           RESUME MAKER <i class="fab fa-firstdraft" />
//         </h1>
//         <h3>Sign-in to Your Account</h3>
//         <div className="ui divider"></div>
//         <div className="ui form">
//           <div className="field">
//             <input
//               type="text"
//               name="email"
//               placeholder="Email Address"
//               value={formValues.email}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.email}</p>
//           <div className="field">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />
//           </div>
//           <p>{formErrors.password}</p>
//           <button className="signup__button">Sign In</button>
//         </div>
//       </form>

//       <div className="signup__companies">
//         <p>Sign in with&nbsp;&nbsp;&nbsp;&nbsp;</p>
//         <a href="#" class="Facebook__logo">
//         <i class="fa-brands fa-facebook "></i>
//           &nbsp;Facebook
//         </a>

//         <a href="#" className="Google__logo">
//           <img src="./images/search.png"></img>Google
//         </a>
//       </div>

//       <div className="signup__forgot-password">
//         <a href="#">Forgot your password?</a>
//         <span>Don't have an account?</span> <a href="#">Sign Up</a>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import "./Signup.scss"
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";
  
const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
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
      <Link to='/' style={{textAlign: "center", display:"block", paddingBottom: "1rem", color: "rgb(81, 81, 255)", textDecoration:"none", fontSize:"1.5rem", fontWeight:"bold"}}>
          RESUME
          <i style={{color: "rgb(81, 81, 255)"}} class='fab fa-firstdraft' />
        </Link>
      <h2 style={{textAlign:"center", marginBotton:"1rem"}} > New User</h2>
      <form onSubmit={onSubmit}>
        <input className="login--input" placeholder="Email" type="email" ref={emailRef} />
        <input className="login--input" placeholder="Name" type="name" ref={nameRef} />
        <input className="login--input" placeholder="Password" type="password" ref={psdRef} />
        <button className="btn-signup" type="submit">Register</button>
        <h3 style={{fontSize:"1rem", display:"block",textAlign:"center"}}>OR</h3>
        <hr style={{marginBottom: "2rem"}}></hr>
        <div onClick={signInWithGoogle} class="google-btn">
          <div class="google-icon-wrapper">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
          </div>
          <p class="btn-text">Sign in with google</p>
        </div>
        {/* <button onClick={signInWithGoogle} className="btn-signup">Google Signin</button> */}
      <Link to="/phoneSignUp">
      <button className="btn-signup">Sign In with Phone Number</button>
      </Link>
      </form>
    </div>
  );
};

export default Signup;