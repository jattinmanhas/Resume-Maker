import React from 'react'
import "./HeadBlog.css"

function HeadBlog() {
     return (
          <div className="headBlog__container">
               <div className="headerTitles__blog">
                    <span className="headerTitleSm">Career Changing</span>
                    <span className="headerTitleLg">BLOG</span>
               </div>
               <img
                    className="headerImg__blog"
                    src="https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
               />
          </div>
     )
}

export default HeadBlog
