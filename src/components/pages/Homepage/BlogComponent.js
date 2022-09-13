import React from "react";
import "./../../../styles/homepage.css";

const BlogComponent = ({ blogTitle, blogImage }) => {
  return (
    <>
      <div className="blogpost-wrapper">
        <div className="blog-image-container">
          <img src={blogImage} alt="" className="post-image" />
        </div>

        <p className="blog-title">{blogTitle}</p>
      </div>
    </>
  );
};

export default BlogComponent;
