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
import "./Signup.css"

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

  return (
    <div className="form">
      <h2> New User</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;