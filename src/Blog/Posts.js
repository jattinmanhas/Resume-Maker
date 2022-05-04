import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="posts__blogs">
      <Link to="/singlepage1" style={{ textDecoration: "none" }}>
        <Post
          src="https://cdn-images.zety.com/pages/job_hunting_nightmares_zety_7.jpg?fit=crop&h=260&dpr=2"
          postTitle="Job Hunting Nightmares: What Are Recruiters Doing Wrong?"
          postDate="28 Feb. 2022"
          postDesc="The Great Resignation means major job ad scouring. Cringeworthy job ads and nightmare recruiters won’t cut it anymore! 1000+ American workers share the no-nos."
        />
      </Link>

      <Link to="/singlepage2" style={{ textDecoration: "none" }}>
        <Post
          src="https://cdn-images.zety.com/pages/resume_job_description_zety_us_1.jpg?fit=crop&h=260&dpr=2"
          postTitle="How to Write an Effective Resume Job Description + Examples"
          postDate="1 March 2022"
          postDesc="When it comes to a job application experience is king. Learn how to write a resume job description that’ll be your recruitment crowning glory."
        />
      </Link>

      <Link to="/singlepage3" style={{ textDecoration: "none" }}>
        <Post
          src="https://images.pexels.com/photos/5668869/pexels-photo-5668869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          postTitle="101+ Essential Skills to Put on a Resume [In 2022]
"
          postDate="1 Jan 2022"
          postDesc="If your certifications are job-critical, it’s essential to include them on top of your resume in the summary or contact information section, or you risk the recruiter just skipping over your resume.
"
        />
      </Link>

      <Link to="/singlepage4" style={{ textDecoration: "none" }}>
        <Post
          src="https://images.pexels.com/photos/4101343/pexels-photo-4101343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          postTitle="Why and How to List Certifications on a Resume – Guide w/ Examples"
          postDate="1 year ago"
          postDesc="National Mission on Edible Oils – Oil Palm (NMEO-OP) is a new Centrally Sponsored Scheme with a special focus on the North east region and the Andaman and Nicobar Islands with a focus on increasing area and productivity of oilseeds and Oil Palm."
        />
      </Link>

      <Link to="/singlepage5" style={{ textDecoration: "none" }}>
        <Post
          src="https://images.pexels.com/photos/6205759/pexels-photo-6205759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          postTitle="How to Accept a Job Offer in 2022 [Free Email Template]
"
          postDate="28 March 2022"
          postDesc="You just got offered a job and you’re super excited to just accept it and get started already…

          Understandable, but step back for a second. "
        />
      </Link>

      <Link to="/singlepage6" style={{ textDecoration: "none" }}>
        <Post
          src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          postTitle="What to Wear to an Interview - For Both Men & Women

"
          postDate="22 April 2022"
          postDesc="Choosing the right outfit, though, isn’t all that easy. There isn’t a one-size-fits-all formula on what to wear for YOUR job interview. 

"
        />
      </Link>

     
    </div>
  );
}

export default Posts;
