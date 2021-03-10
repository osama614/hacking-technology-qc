import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const ByTagsList = ({ categories }) => {
  const { tag } = useParams();
  const [blogsList, setBlogList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://osos.pythonanywhere.com/api/v1/blogs/search/tags?tag=${tag}`)
      .then((res) => res.data)
      .then((data) => setBlogList(data));
  }, [tag]);

  return (
    <div className="about-us">
      {blogsList.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          category={
            categories.filter((category) => category.id === blog.category)[0]
          }
        />
      ))}
    </div>
  );
};

const mapStateToProps = ({ blogs: { categories } }) => {
  return {
    categories: categories,
  };
};

export default connect(mapStateToProps)(ByTagsList);
