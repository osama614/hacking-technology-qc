import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import BlogCard from "../Blog/BlogCard";

const FeaturedBlogs = ({ categories, featuredBlogs }) => {
  const delay = 2500;

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === featuredBlogs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, featuredBlogs.length]);

  return (
    <div className="featured-blogs carousel slideshow">
      <div className="carousel-title mb-4 text-center">
        <h2>أبرز المدونات</h2>
      </div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}
      >
        {featuredBlogs.map((currentBlog, index) => (
          <div className="slide carousel-inner" key={index}>
            <BlogCard
              blog={currentBlog}
              category={
                categories.filter(
                  (category) => category.id === currentBlog.category
                )[0]
              }
            />
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {featuredBlogs.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ blogs }) => {
  return {
    categories: blogs.categories,
    featuredBlogs: blogs.blogsList.filter((blog) => blog.important === true),
  };
};

export default connect(mapStateToProps)(FeaturedBlogs);
