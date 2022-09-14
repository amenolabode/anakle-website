import React from "react";
import BlogComponent from "./BlogComponent";
import "./../../../styles/homepage.css";

const Blogposts = ({ blogBody }) => {
  const posts = [
    {
      image: "./blogimage.jpg",
      title:
        "BlogTitle Text and all Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      image: "./blogimage.jpg",
      title:
        "BlogTitle Text and all Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      image: "./blogimage.jpg",
      title:
        "BlogTitle Text and all Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      image: "./blogimage.jpg",
      title:
        "BlogTitle Text and all Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      image: "./blogimage.jpg",
      title:
        "BlogTitle Text and all Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      image: "./blogimage.jpg",
      title:
        "BlogTitle Text and all Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ];

  return (
    <>
      <div className="blogpost-container">
        <div className="blogpost-container-wrapper">
          <div className="blog-text-wrapper">
            <p className="blogpost-topline">BLOG POSTS</p>
            <h1 className="blogpost-header">OUR JOURNAL</h1>
            <p className="blogpost-header">{blogBody}</p>
          </div>
          <div className="blogpost-media-scroller">
            {posts.map((p, i) => (
              <BlogComponent blogImage={p.image} blogTitle={p.title} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogposts;
