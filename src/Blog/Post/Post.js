import React from 'react'
import "./Post.css"

function Post({src,postTitle,postDate,postDesc}) {
     return (
          <div className="post__blog">
               <img className="postImg" src={src} alt="example image" />
               <div className="postInfo">

                    <span style={{textDecoration:"none"}} className="postTitle">{postTitle}</span>
                    <hr />
                    <span className="postDate">{postDate}</span>
               </div>
               <p className="postDesc">
                    {postDesc}
               </p>
          </div>
     )
}

export default Post
