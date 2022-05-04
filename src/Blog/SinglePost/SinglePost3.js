import { Link } from "react-router-dom";
import "./SinglePost.css";
import React from "react";

export default function SinglePost3() {
  return (
    <div className="singlePost__blog">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/4226115/pexels-photo-4226115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <h1 className="singlePostTitle">101+ Essential Skills to Put on a Resume [In 2022]</h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">Ashish</b>
          </span>
          <span>1 Jan 2022</span>
        </div>
        <div className="singlePost__container">
          <p className="singlePostDesc">
          Listing skills on your resume is fairly easy. 

Listing the right skills in the right way is a little bit trickier.  
<br/>

Are you mentioning the right skills for the job, or are you boring the HR manager with irrelevant information? 
<br/>
Here’s a hint: the hiring manager for the Software Development team couldn’t care less about your expertise in Marketing.
<br/>
What they’re dying to know, though, is your skill level in Python.
<br/>
In this guide, we’re going to walk you through the process of putting skills on your resume. We’ll explain how to identify the right skills, and how, exactly, to list them.
<br/>

          </p>

          <img
            className="singlepostDesc_img"
            src="https://cdn-blog.novoresume.com/articles/most-important-skills-to-put-on-your-resume/skills-to-put-on-resume.png"
            alt=""
          />
    
          <h2 className="singlepostDesc_heading">Among others, you will learn: </h2>
          <p className="singlePostDesc_cont">
            <p>
              <br/>
              <li className="padding_space">
              How and why should you list your skills on a resume?
              </li>
              <li className="padding_space">What are hard skills, soft skills, and what is the difference?
              </li>
            
              <li className="padding_space">
          How can you list skills on your resume to help you stand out?
          </li>
            <li className="padding_space">
            What are the top 120+ skills to put on a resume? For 10+ fields!
            </li>
            
          </p>
          </p>

          <h2 className="singlepostDesc_heading">Hard Skills vs Soft Skills - What's the Difference ? </h2>
          <p className="singlePostDesc_cont">
            <p>
            Hard skills refer to the technical knowledge or training you have gotten 
            through experience. They are specific and essential to each job and are used
             for completing your tasks.

              <br/>
              <img
              className="singlepostDesc_img"
              src="https://cdn-blog.novoresume.com/articles/most-important-skills-to-put-on-your-resume/hard-skills.png" alt=""></img>
              <br/>
              <b>Hard Skills Include (& Examples):

</b>
<br/>

         <li className="padding_space">
           <b>Machinery skills -</b>
         operating a road roller, operating a PoS, pallet-stacker, forklift, etc
              </li>
              <li className="padding_space">
              <b>Software skills -</b>
              Adobe Creative Suite, Ableton Live Suite
              </li>
            
              <li className="padding_space">
              <b>Tools - </b>
              SEM Marketing, Stethoscope, Google Analytics, Google Search Console, ERP systems, CRMs

          </li>
            <li className="padding_space">
            <b>Languages -</b>
            French, Spanish
            </li>
            <li className="padding_space">
            <b>Languages -</b>
            French, Spanish
            </li>
            <li className="padding_space">
            <b>Coding Languages - </b>
            Python, C++, C#, Java, Scala, R
            </li>
            <li className="padding_space">
            <b>Techniques -</b>
            Frequency analysis, Crystallization 
            </li>
            
          </p>
          </p>

          <h2 className="singlepostDesc_heading">
          Soft Skills  </h2>
          <p className="singlePostDesc_cont">
            <p>
            Soft skills, on the other hand, are attributes and habits that describe
             how you work individually or with others. They are not specific to a job,
             but indirectly help you adapt to the work environment and company culture. 
              <br/>
           
              <b>Some of the most in-demand soft skills are:

</b>
<br/>

         <li className="padding_space">
         Effective communication
              </li>
              <li className="padding_space">
              Teamwork
              </li>
            
              <li className="padding_space">
              Responsibility
          </li>
            <li className="padding_space">
            Creativity
            </li>
            <li className="padding_space">
            Problem-solving
            </li>
            <li className="padding_space">
            Leadership

            </li>
            <li className="padding_space">
            Extroversion
            </li>
            <li className="padding_space">
            People skills
            </li>
            <li className="padding_space">
            Openness

            </li>
            
          </p>
          </p>


        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
