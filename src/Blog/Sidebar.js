import React from 'react'
import { Link } from "react-router-dom";
import "./Sidebar.css"

function Sidebar() {
     return (
          <div className="sidebar__blog">
               <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT US</span>
                    <img
                         src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                         alt=""
                    />
                    <p>
                    Hope You all appreciate our work on these blog post and we will be gload if they  are helping you making a better Resume .
                           </p>
               </div>
               
               <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                         <Link to="/">
                         <i className="sidebarIcon fab fa-facebook-square"></i>
                         <i className="sidebarIcon fab fa-instagram-square"></i>
                         <i className="sidebarIcon fab fa-pinterest-square"></i>
                         <i className="sidebarIcon fab fa-twitter-square"></i>
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Sidebar
