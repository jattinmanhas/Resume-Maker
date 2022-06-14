import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserContext } from "../context/userContext";
import "./Signup.scss"

const PhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserContext();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="container1">
      <Link to='/' style={{textAlign: "center", display:"block", paddingBottom: "1rem", color: "rgb(81, 81, 255)", textDecoration:"none", fontSize:"1.5rem", fontWeight:"bold"}}>
          RESUME
          <i style={{color: "rgb(81, 81, 255)"}} class='fab fa-firstdraft' />
        </Link>
        <h2 style={{marginBottom: "1rem"}}>Firebase Phone Auth</h2>

        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
          <Form.Group controlId="formBasicEmail">
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber}
              placeholder="Enter Phone Number"
            />
            <div id="recaptcha-container"></div>
          </Form.Group>
          <div className="button-right">
            <Link to="/phoneSignUp">
              <button className="phone__button">Cancel</button>
            </Link>
            &nbsp;
            <button type="submit" className="phone__button">
              Send Otp
            </button>
          </div>
        </Form>

        <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
          <Form.Group controlId="formBasicOtp">
            <Form.Control
              type="otp"
              placeholder="Enter OTP"
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <div className="button-right">
            <Link to="/">
              <button className="phone__button">Cancel</button>
            </Link>
            &nbsp;
            <button type="submit" className="phone__button">
              Verify
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PhoneSignUp;