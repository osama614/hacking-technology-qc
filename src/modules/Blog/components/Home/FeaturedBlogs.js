import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import BlogCard from "../BlogCard";

const FeaturedBlogs = ({ categories, featuredBlogs }) => {
  
  const [carouselIndicators, setCarouselIndicators] = useState([]);
  const [currentIndicator, setCurrentIndicator] = useState(null);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    if (featuredBlogs.length > 0) {
      setCurrentIndicator(featuredBlogs[0].id);
      setCurrentBlog(featuredBlogs[0]);
      const indicators = [];
      for (let index = 0; index < featuredBlogs.length; index++) {
        indicators.push({ id: featuredBlogs[index].id });
      }
      setCarouselIndicators([...indicators]);
    }
  }, [featuredBlogs]);

  const slideSelectedBlog = (id) => {
    if (id !== currentIndicator) {
      const selectedBlog = featuredBlogs.filter((blog) => blog.id === id)[0];
      setCurrentIndicator(id);
      setCurrentBlog({ ...selectedBlog });
    }
  };

  return (
    <div className="featured-blogs carousel slide" data-ride="carousel">
      <div className="carousel-title mb-4 text-center">
        <h2>أبرز المدونات</h2>
      </div>
      <ol className="carousel-indicators">
        {carouselIndicators.map((indicator) => (
          <li
            key={indicator.id}
            data-slide-to={indicator.id}
            className={`blogs-carousel-indicator ${
              currentIndicator === indicator.id ? "active" : ""
            }`}
            onClick={() => slideSelectedBlog(indicator.id)}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {currentBlog ? (
          <BlogCard
            blog={currentBlog}
            category={categories.filter(
              (category) => category.id === currentBlog.category
            )[0]}
          />
        ) : null}
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
