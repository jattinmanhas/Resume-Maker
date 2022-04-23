import React from "react";
import "./CareerBlog.css";

export default function CareerBlog(){
    return(
        <>
                <div className="colored">
            <h1 className="heading">
                Tips For Better Resume!
            </h1>
            <p className="para">Our resume guide help you stand out of crowd.</p>

        </div>

        <div className="white">

        <div className="row">
        <div class=" col-lg-6 col-md-6 col-sm-12">
            <img src="images/dynamic-image.png" alt="dynamicImageHere" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}/>
        </div>
            <div className=" col-lg-6 col-md-6 col-sm-12">

                <h1 className="heading" > What is a resume? </h1>
                <p className="para ">A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history. </p>
                <p className="para"> Your work history</p>
                <p className="para">Educational History </p>
                <p className="para">Achievements </p>
                <p className="para"> Projects done</p>
                <p className="para"> Resume Summary</p>
            </div>
        </div>
        
         <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
                <h1 className="heading">Format Your Resume [with No Work Experience]</h1>
                <p className="para" >A resume format is the layout of your resume.</p>
                <p className="para">The ideal resume format usually depends on how much work experience you have.</p>
                <p className="para">But what happens when you have none?</p>
                <p className="para">For a no-experience resume, we recommend that you use the reverse-chronological format</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <img src="images/resume-selecting.png" alt="dynamicImageHere" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}/>
            </div>

            <p className="para"> The sections in your reverse-chronological resume will be: </p>

            <p className="para"><b>Header:</b> Contact Information and Resume Statement.</p>
            <p className="para"><b>Eduction:</b>Firstly degree then school Education details.</p> 
            <p className="para"><b>Internship :</b> extracurricular activities, projects, volunteer work (These sections will replace your work experience)</p> 
            <p className="para"><b>Skills:</b>Example - As CSE student you have to write coding languages you know.</p> 



         </div>
         
        <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                <img src="images/linkedin.png" alt="LinkedInImageHere" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px',height:'480px'}}/>
                </div>

            <div className="col-lg-6 col-md-12 col-sm-12">
            <h1 className="heading">Make LinkedIn Profile to complement your Resume</h1>
                <p className="para"><b> 1.LinkedIn Photo:</b></p>
                <p className="para"> 
                Choose a professional photo that is suitable for recruiters to see. Match it with the photo on your resume, if have one.</p>
                <p className="para"><b>2.LinkedIn HeadLine : </b>
                </p>
                <p className="para">
                When you go to edit your profile, right under your name, you have an option to select a headline. 
                This is what will appear on Google searches if a recruiter tries to look up your name.
                </p>
           
            </div>
            <p className="para">
                The default setting is for the headline to display your current work position, but you can change this to be something more persuasive or reflective of more than just your job.

                </p>
                <p className="para"><b>3.LinkedIn Summary:</b></p>
                <p className="para">
                    Unlike a resume summary statement, the LinkedIn summary is longer and lets you create a powerful image of yourself with more words.
                </p>

         </div>

         <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
            <h2 className="heading">Hobbies and Interest to Put on Resume:</h2>
            <p className="para"><b className="note">Write hobbies and Interest Only when you have space in your Resume.</b></p>
                <p className="para"><b>Hobbies does matters:</b></p>
                <p className="para">Company want team works from it's employees.</p>
                <p className="para">If your hobby defines team work or is related to job you are applying,
                                    then hobby can also let you stand Out of crowd.
                </p>
                
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <img src="images/contactus1.png" alt="dynamicImageHere" style={{borderRadius: '3rem', width: 'auto', maxWidth: '480px'}}/>
            </div>
            <p className="para"> <b>Interest:</b>Keep in mind your Interests let HR understand the metality of employee .</p>
                <p className="para">Your interest must represent your Goodwill and your ability to work well in any environment.</p>
         </div>


 </div>
        </>
    )
}