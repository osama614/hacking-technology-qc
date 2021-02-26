import React from "react";
import { Link } from "react-router-dom";

import { baseUrl } from "../../../api/Constants";
import { formatDate } from "../../../shared/utils/helpers";

import { LeftArrow } from "../../../assets/index";

const BlogCard = ({ blog, category }) => {
  
  const getSubContent = (body) => {
    const contentArray = body.split(">");
    const subContentArray = contentArray[1].split("<");
    const subContent = subContentArray[0].slice(0, 200);
    return subContent;
  };

  return blog ? (
    <div className="blog-card mb-3" style={{ maxWidth: 1100, maxHeight: 232 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={blog.cover ? baseUrl + blog.cover : ""}
            className="card-img"
            width="348"
            height="232"
            alt="blog cover"
            loading="lazy"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h6 className="card-subtitle mb-2">{category?.title}</h6>
            <Link className="blog-card-title" to={`/${blog.id}`}>
              <h5 className="card-title" >{blog.title}</h5>
            </Link>
            <p className="card-text">{getSubContent(blog.body)} ...</p>
            <div className="d-flex w-100 justify-content-between">
              <p className="card-text">
                <small className="text-white-50">
                  {formatDate(blog.publish)}
                </small>
              </p>
              <Link to={`/${blog.id}`}>
                <img src={LeftArrow} height={30} width={37} alt="arrow" loading="lazy" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default BlogCard;
