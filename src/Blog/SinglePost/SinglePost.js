import { Link } from "react-router-dom";
import React from "react";
import "./SinglePost.css";

export default function SinglePost1() {
     return (
          <div className="singlePost__blog">
               <div className="singlePostWrapper">
                    <img
                         className="singlePostImg"
                         src="https://images.pexels.com/photos/4467735/pexels-photo-4467735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

                         alt=""
                    />
                    <h1 className="singlePostTitle">
                    Job Hunting Nightmares: What Are Recruiters Doing Wrong?
                    </h1>
                    <div className="singlePostInfo">
                         <span>
                              Author:
                              <b className="singlePostAuthor">
                                   Dr. Gargr
                              </b>
                         </span>
                         <span>28 Feb. 2022</span>
                    </div>
                    <div className="singlePost__container">
                         <p className="singlePostDesc">
                         A tidal wave of more than 24 million American workers have quit their jobs since April 2021. Everyone’s perusing job ads these days during “The Great Resignation.” 

 

                         Imagine you’re on the hunt, clicking through job ads and discover...
                            <br /><br />
                            It’s got your name written all over it. Your qualifications and education match. The location is…

                              Huh. It’s not there? That’s strange. 
                              <br /><br />
                              You think, “Okay, must be a remote position!” trying to stay positive. But, it’s not. You search the ad for the salary, holding out hope. 
                              <br /><br />
                              But, that’s not included either. Frustrated, you move on to the next job. What a waste of valuable time! 

                              Some job ads and recruiters leave something to be desired. Zety conducted a study of 1000+ American employees to find out what they thought of job posts and recruitment situations. We even tested their sexist/ageist phrase-ometer. 
                              <br/>
                              <br/>
                              Guess what, recruiters? 

 
                              <br/>
                              <b> Nearly all of the respondents, 95%, said salary range should be included in job ads. </b>

 

                             <br/> A couple of other highlights: 

 
                              <br/>
                              <br/>
                            <b>.</b>  46% of women had a negative reaction to the word “Ninja” in a job ad.
                         <br/>          <b>.</b>   56% of all respondents said dealing with a chatbot was annoying.

                         </p>
                         <h2 className="singlepostDesc_heading" >Show me the money</h2>
                         <p className="singlePostDesc_cont">
                         Let’s be honest. 

                         <br /><br />

                         As Americans, we’re money-obsessed. We eat up stories about the wealthiest people and want to see what’s being served inside Elon Musk’s private jet, or rather spaceship. 

 
                             <br /><br />

                              A “fun company culture” may sound appealing. But when it comes down to it, money talks
                              <br/>
                              And much to job seekers’ chagrin, most job descriptions lack basic salary information. 

                              <br/><br/>

                              Today’s job seeker is more savvy and fickle in this increasingly tight labor market. They want to see that salary range. 
                                </p>
                         <h2 className="singlepostDesc_heading" >Salary range and benefits were by far the most highlighted portions of the job description.</h2>
                         <br/><br/>
                         <h4 className="singlepostDesc_smHeading">When asked which parts of the job description were the most important, 61% selected compensation. That was number 1 for those in the LinkedIn study. 
                         
                         </h4>
                         <img className="singlepostDesc_img" src="https://cdn-images.zety.com/pages/job_hunting_nightmares_zety_2.jpg" alt="" />
                       
                         <p className="singlePostDesc_cont">For our study, the respondents were first asked if job posts should include the salary range, and 95% answered yes. It was followed up with a question to find out just how important it was to them.
                         <br /><br />
                        <br/> 42%—very important
                          <br/>    34%—absolutely essential
                              <br/> 18%—of average importance
                         <br/> 3%—of little importance 
                         <br/> 2%—not at all important
                              <br /><br />
                              From this, you can say that 94% of the respondents feel that it’s important to see the salary in job ads. This lines up with the 95% who answered yes to the first question.
                         <br/>
 

                         A mere 5% considered seeing salary information unimportant. 
                         </p>


                    </div>

               </div>
          </div>
     );
}