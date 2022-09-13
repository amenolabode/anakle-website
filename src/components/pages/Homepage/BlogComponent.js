import React from 'react'
import "./../../../styles/homepage.css";



const BlogComponent = ({blogTitle, blogImage}) => {

  return (
    <>
      <div className="blogpost-wrapper">
        <img src={blogImage} alt="" className="post-image" />
        <p className="blog-title">
        {blogTitle}
        </p>
      </div>
    </>
  )
}

export default BlogComponent
