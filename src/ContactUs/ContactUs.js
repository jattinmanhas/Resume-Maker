import React from "react";
import "./ContactUs.css";
export default function ContactUs(){
    return(
        <>
        <div className="colored">
            <h1 className="heading">
                Let Us know If You Need Any Help!
            </h1>
            <p className="para">Our Customers are our sole priority.</p>

        </div>

        <div className="white">

        <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <img src="./images/contactus.png" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}></img>
                </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
            <h2 className="heading-h2">Contact Us Here</h2>
            <p className="para">  
            <b> Mobile Number:</b>
            +1800 1800 1800
            </p>
            <p className="para">
                <b>Email  Us Here :-</b>
                <a href="">resumebuilder1800@email.com</a> 
            </p>
                </div>
            </div>

            <div className="row">
            <h1 className="heading-center">FAQ</h1>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <h2>I can't Login :</h2>
            <p className="para"> Try logging in with your social media account</p>
            <p className="para"> Clear the cache in your browser</p>
            <p className="para"> Refresh the page</p>
            <p className="para"> Use the incognito/private mode to log in</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                <img src="./images/contactus1.png" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}></img>
                </div>
            </div>

            

            

        </div>

        </>
    );
}