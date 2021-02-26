import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import BlogCard from "./BlogCard";
import Pagination from "./layout/Pagination";

const BlogsList = ({ categories, blogsList }) => {

  const perPage = 5;
  const [pageCount, setPageCount] = useState(1);
  const [sortedBlogs, setSortedBlogs] = useState([]);
  const [currentPageBlogs, setCurrentPageBlogs] = useState([]);
  const [currentFilter, setCurrentFilter] = useState(0);
  const [currentSort, setCurrentSort] = useState(0);

  useEffect(() => {
    let sortedBlogs = [...blogsList];
    let blogsCount = blogsList.length;

    if (currentFilter) {
      sortedBlogs = blogsList.filter(
        (blog) => blog.category === currentFilter
      );
      blogsCount = sortedBlogs.length;
    }

    if (currentSort === 0) {
      sortedBlogs.sort((a, b) => new Date(b.publish) - new Date(a.publish));
    }
    else{
      sortedBlogs.sort((a, b) => new Date(a.publish) - new Date(b.publish));
    }
    
    setSortedBlogs([...sortedBlogs]);
    setCurrentPageBlogs([...sortedBlogs.slice(0, perPage)]);
    setPageCount(blogsCount / perPage);
  }, [blogsList, currentFilter, currentSort]);

  const onFilterChange = ({ target }) => {
    const filter = Number(target.value);
    setCurrentFilter(filter);
  };

  const onSortChange = ({ target }) => {
    const sortOption = Number(target.value);
    setCurrentSort(sortOption);
  };

  const handlePageClick = (data) => {
    const selected = data.selected;
    const offset = Math.ceil(selected * perPage);
    setCurrentPageBlogs([...sortedBlogs.slice(offset, offset + perPage)]);
  };

  return (
    <div className="blogs-list">
      <div className="blogs-list-title mb-4 text-center">
        <h2>{
        currentSort === 0? 
        "أحدث المدونات"
        :"أقدم المدونات"}</h2>
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
                  name="categoryFilter"
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
                    name="categoryFilter"
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
        
          <p className="sort-title">ترتيب حسب</p>
          <div className="form-group row sort-options">
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    currentSort === 0 ? "checked" : ""
                  }`}
                  type="radio"
                  name="sortOption"
                  value={0}
                  id="sort-new"
                  checked={currentSort === 0}
                  onChange={onSortChange}
                />
                <label className="form-check-label" htmlFor="sort-new">
                  الأحدث
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${
                    currentSort === 1 ? "checked" : ""
                  }`}
                  type="radio"
                  name="sortOption"
                  value={1}
                  id="sort-old"
                  checked={currentSort === 1}
                  onChange={onSortChange}
                />
                <label className="form-check-label" htmlFor="sort-old">
                  الأقدم
                </label>
              </div>
            </div>
        </div>
        </div>
        <div className="main">
          {sortedBlogs.length > 0 ? (
            currentPageBlogs.length > 0 &&
            currentPageBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                category={categories.filter(
                  (category) => category.id === blog.category
                )[0]}
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
      {sortedBlogs.length > perPage ? (
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
