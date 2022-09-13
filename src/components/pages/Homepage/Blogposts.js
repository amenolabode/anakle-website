import React from "react";
import BlogComponent from "./BlogComponent";

const Blogposts = () => {
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
      <div className="blogpost-countainer">
        <div className="blogpost-media-scroller">
          {posts.map((p, i) => (
            <BlogComponent blogImage={p.image} blogTitle={p.title} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogposts;
