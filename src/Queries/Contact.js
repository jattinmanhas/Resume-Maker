import React, { useState, useEffect, Component } from "react";
import "./Contact.css";
import {db} from "../firebase/index";
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);


    const docRef = await addDoc(collection(db, "data"),{
      name: name,
          email: email,
          message: message,
    })
    console.log("Document written with ID: ", docRef.id);
    alert("Your message has been submitted👍");     

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <div className="container__contactimg">
      <img src="images/coolbackground.svg" alt="" />
    </div>
    <form className="form__contact" onSubmit={handleSubmit}>
      <h1>Feel free to Contact Us!</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Query</label>
      <textarea
        placeholder="Queries"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  </>
  );
};

export default Contact;
