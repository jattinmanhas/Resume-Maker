import React from "react";
import './Action.css';



    function Action() {
      return (
  
        <div className="action-container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src="images/action-image.png" alt="actionimage" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}} />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <h1 className="action-heading">Why Resume Builder?</h1>
              <p className="action-p"><b> &gt; Easy to Use</b> - Our builder is very easy to use, even if you're not too tech-friendly.</p>
              <p className="action-p"><b> &gt; Get Started in under 5 Minutes</b> - Just pick one of our resume templates, and you're good to go!</p>
              <p className="action-p"><b> &gt; Tons of Customization and Design Options </b>- Our builder offers a ton of customization.
                You can make changes to the layout, color schemes, and much more.</p>
              <p className="action-p"><b> &gt; It's 100% free </b>- Some resume builders out there pretend to be free…
                and then they hit you with a paywall once you are done writing your resume! We do not do that.</p>
            </div>
          </div>
          <div className="row">
  <div className=" col-lg-6 col-md-6 col-sm-12">

  <h1 className="action-heading" > What is a resume? </h1>
  <p className="action-p dynamic-p p-main ">A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history. </p>
  <p className="action-p dynamic-p"> Your work history</p>
  <p className="action-p dynamic-p">Educational History </p>
  <p className="action-p dynamic-p">Achievements </p>
  <p className="action-p dynamic-p"> Projects done</p>
  <p className="action-p dynamic-p"> Resume Summary</p>
  </div>

<div class=" col-lg-6 col-md-6 col-sm-12">
<img src="images/dynamic-image.png" alt="dynamicImageHere" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}/>
</div>

</div>

<div className="row">

<div class=" col-lg-6 col-md-6 col-sm-12">
<img src="images/dynamic-image.png" alt="dynamicImageHere" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}/>
</div>

  <div className=" col-lg-6 col-md-6 col-sm-12">

  <h1 className="action-heading" > What's the difference between a CV and a resume?</h1>
  <p className="action-p dynamic-p p-main ">In the EU, the words "CV" and "resume" are used interchangeably</p>
  <p className="action-p dynamic-p"> In the United States, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics.</p>
  <p className="action-p dynamic-p">Hope you understood the differences between CVs and resumes. </p>
  
  </div>

</div>
          
        </div>
      );
    }

   






 export default Action;