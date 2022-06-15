import React from "react";
import "./AboutUs.css";

export default function AboutUs(){
    return(
        <div>

<div className="about-colored">
      <h1 className="about-heading">About Us</h1>
      <p className="about-p">" Our mission is to make our customers happy with our Ads Free online Resume Builder. "</p>
    </div>


    <div className="about-white">
    <div className="about-us-title">
            <div className="about-us-text">
                  
                <h2 className="about-heading heading-white">Origin</h2>
              <p className="about-p">
              The project website Resume Builder comes in reality in 2022 when our team faceed issues while making resumes online , as almost every website ask
              for premium membership for using good looking in demand resume templates.To solve issue we decided to build <b>ONLINE RESUME MAKER </b> with every
              single template available for free.</p>
      
              </div>
              <div className="about-us-img">
              <img src="./images/contactus1.png" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}></img>
              </div>
      </div>
    
        <br/>

        <div className="about-us-second-title">
          
            <div>
            <img src="./images/resume-selecting.png" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}></img>
            </div>
            <div>
            <h2 className="about-heading heading-white">Why Resume Builder?</h2>
              <p className="about-p ">
               It's free and easy to use.
              </p>
            <p className="about-p ">
             Can make both Resume and CV.
            </p>
            <p className="about-p ">
              We provide templates that's definitely going to land you to interview with your dream company.
            </p>


            </div>
                  
        </div>
      
    
      <h2 className="about-heading heading-white" style={{textAlign:"center", paddingTop:"5rem"}}>Aim</h2>
        <p className="about-p " style={{textAlign:"center", display:'block'}}>
          Help everyone to land on their dream job.
        </p>
      </div>



        </div>
    );
}
