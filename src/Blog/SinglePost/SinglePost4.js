import { Link } from "react-router-dom";
import "./SinglePost.css";
import Footer from "../../Footer/Footer";
import React from "react";

export default function SinglePost4() {
     return (
          <div className="singlePost__blog">
               <div className="singlePostWrapper">
                    <img
                         className="singlePostImg"
                         src="https://images.pexels.com/photos/5915225/pexels-photo-5915225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

                         alt=""
               />
              
                    <h1 className="singlePostTitle">
                     Why and How to List Certifications on a Resume - Guide w/ Examples?
                    </h1>
                    <div className="singlePostInfo">
                         <span>
                              Author:
                              <b className="singlePostAuthor">
                                   John
                              </b>
                         </span>
                         <span>1 year ago</span>
                    </div>
                    <div className="singlePost__container">
                         <p className="singlePostDesc">

 <br/>
               Looking to include certifications on your resume, but not sure how?
               <br/>
               We don’t blame you - it’s not as simple as it seems.
               <br/>
               <br/>

               For example, if your certifications are job-critical, it’s essential to include them on top of your resume in the summary or contact information section, or you risk the recruiter just skipping over your resume.
               <br/><br/>
               Or, if they’re not, you need to create a dedicated section for all your important certifications (and NOT clutter your other sections).
               <br/><br/>
               And in this group, we’re going to teach you how to do all that!
               <br/><br/> </p>

                        
                         <h2 className="singlepostDesc_heading">So Why Certifications?</h2>
                         <p className="singlePostDesc_cont">A certification is a document that proves you have specific expertise and is issued by an authorized organization. 
<br /><br />
               Earning such a document shows that you’re devoted to your field of work and provides evidence of your skills. Adding a professional certification to your resume is proof that you have the competence to do something. And for some positions, it is exactly this proof that could tilt the balance in your favor.
               <br/><br/>
               Even if the certification is not job-critical, it can certainly boost your resume, draw attention to your application, and present you as a valuable hire.

                         </p>
                         <h2 className="singlepostDesc_heading">How to List Certifications on a Resume</h2>
                         <p className="singlePostDesc_cont">
                         The easiest and most common way to include your certifications is to just add a new section dedicated to them.
                         <br/>
                         <br/>
                         First, create a heading on your CV named “Certifications,” and create entries underneath.

                         <br/>
                         <br/>
                         Then, under your designated subheading, list each certification in reverse-chronological order. Meaning, you start with the most recent certificate and make your way from there.

                          </p>
                          <img className="" 
                          src="https://cdn-blog.novoresume.com/articles/resume-certifications/certifications-on-resume.png"
                          
                          alt=""
                          style={{width:'60%'}}
                          />

                        
                         <p className="singlePostDesc_cont" style={{ marginBottom: '5rem' }}>
                         For each resume certification entry, include the following information:
                         <br/>
                         <li style={{ marginTop: '1rem' }} className="padding_space">
                         Name of Certification
                          </li>
                              <li className="padding_space">
                              Name of Certifying Agency or Body
                              </li>
                              <li className="padding_space">Dates of Obtainment
                              </li>
                              <li className="padding_space">
                              Location (If the certification is location-specific)

                              </li>
                              <li className="padding_space">Expiration date (If applicable; of course, don’t list certifications on a resume that have expired)

                              </li>
                              <li className="padding_space">
                              In Progress (If applicable, just add it in the description with the anticipated finishing date)

                              </li>
                              Other than the designated section, you can also mention your certifications on other attention-grabbing sections of your resume, including:
                              <br/>
                              <li style={{ marginTop: '1rem' }} className="padding_space">
                              Resume Summary
                          </li>
                              <li className="padding_space">
                              Contact Information
                              </li>
                              <li className="padding_space">Education Section
                              </li>
                            
                         </p>
                    </div>

               </div>
               <Footer />
          </div>
     );
}