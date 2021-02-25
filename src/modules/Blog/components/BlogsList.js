import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import BlogCard from "./BlogCard";
import Pagination from "./layout/Pagination";

const BlogsList = ({ categories, blogsList }) => {

  const perPage = 1;
  const [pageCount, setPageCount] = useState(1);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPageBlogs, setCurrentPageBlogs] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(0);

  useEffect(() => {
    let filteredList = [...blogsList];
    let blogsCount = blogsList.length;

    if (currentFilter) {
      filteredList = blogsList.filter(
        (blog) => blog.category === currentFilter
      );
      blogsCount = filteredBlogs.length;
    }
    setFilteredBlogs([...filteredList]);
    setCurrentPageBlogs([...filteredList.slice(0, perPage)]);
    setPageCount(blogsCount / perPage);
  }, [blogsList, currentFilter]);

  const onFilterChange = ({ target }) => {
    const filter = Number(target.value);
    setCurrentFilter(filter);
  };

  const handlePageClick = (data) => {
    const selected = data.selected;
    const offset = Math.ceil(selected * perPage);
    setCurrentPageBlogs([...filteredBlogs.slice(offset, offset + perPage)]);
  };

  return (
    <div className="blogs-list">
      <div className="blogs-list-title mb-4 text-center">
        <h2>أحدث المدونات</h2>
      </div>
      <div className="blogs-list-body d-flex">
        <div className="sidenav">
          <p className="filters-title">فلترة بحسب الفئة</p>
          <div className="form-group row categories-filters">
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    currentFilter === 0 ? "checked" : ""
                  }`}
                  type="radio"
                  name="categoryFilters"
                  value={0}
                  id="0"
                  checked={currentFilter === 0}
                  onChange={onFilterChange}
                />
                <label className="form-check-label" htmlFor={0}>
                  الكل
                </label>
              </div>
              {categories.map((category) => (
                <div className="form-check" key={category.id}>
                  <input
                    className={`form-check-input ${
                      currentFilter === category.id ? "checked" : ""
                    }`}
                    type="radio"
                    id={category.id}
                    name="categoryFilters"
                    value={category.id}
                    checked={currentFilter === category.id}
                    onChange={onFilterChange}
                  />

                  <label className="form-check-label" htmlFor={category.id}>
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="main">
          {filteredBlogs.length > 0 ? (
            currentPageBlogs.length > 0 &&
            currentPageBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                category={categories.filter(
                  (category) => category.id === blog.category
                )}
              />
            ))
          ) : (
            <div className="alert alert-dark text-center" role="alert">
              لا يوجد أي مدونات تحت هذه الفئة حتى الآن، يمكنك المحاولة مرة آخرى
              لاحقًا.
            </div>
          )}
        </div>
      </div>
      {filteredBlogs.length > perPage ? (
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ blogs }) => {
  return {
    categories: blogs.categories,
    blogsList: blogs.blogsList,
  };
};

export default connect(mapStateToProps)(BlogsList);
