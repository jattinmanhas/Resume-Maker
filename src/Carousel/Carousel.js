import React from "react";
import "./Carousel.css";
import { Link } from "react-router-dom";


function Carousel() { 
        return (
            <div className="carousel">
               <div className="container">
        <h1 className="main-heading">Build a Resume online. Start by picking a template.</h1>
        <div className="content">
          
        
          <div className="slideshow">
            
            <button className="slide-btn slide-btn-1" />
            <button className="slide-btn slide-btn-2" />
            <button className="slide-btn slide-btn-3" />
            <button className="slide-btn slide-btn-4" />
            {/* carousel wrapper which contains all images */}
            <div className="slideshow-wrapper">
              
            <div className="slide">
              <Link
              to='/template4'>
                <img className="slide-img" src="./images/template4.png" alt="imag"  />
                </Link>
              </div>
              
              <div className="slide">
              <Link
              to='/template1'>
                <img className="slide-img" src="./images/template1.png" alt="imag" />
                </Link>
              </div>
             

              <div className="slide">
              <Link
              to='/template3'>
                <img className="slide-img" src="./images/template3.png" alt="imag"  />
                </Link>
              </div>

              <div className="slide">
              <Link
              to='/template5'>
                <img className="slide-img" src="./images/template5.png" alt="imag"  />
                </Link>
              </div>
             </div>
</div>
          <p className="paragraph">We've developed our Resume Builder with one goal in mind to help you find a great job faster.</p>
        </div>
      </div>

            </div>


        );
    }

 
export default Carousel ;
