import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeadBlog from './HeadBlog'
import Posts from './Posts'
import Sidebar from './Sidebar'
import "./Blog.css"

function Blog() {
     return (
          <div>
               <HeadBlog/>
               <div className="Blog__container">
               <Posts/>
               <Sidebar/>
               </div>
          </div>
     )
}

export default Blog
