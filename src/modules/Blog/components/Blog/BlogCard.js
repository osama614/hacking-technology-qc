import React from "react";
import { Link } from "react-router-dom";

import { baseUrl } from "../../../../api/Constants";
import { formatDate } from "../../../../shared/utils/helpers";

import { LeftArrow } from "../../../../assets/index";

const BlogCard = ({ blog, category }) => {
  return blog ? (
    <div className="blog-card mb-3" style={{ maxWidth: 1100 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <Link to={`/${blog.slug}/${blog.id}`}>
            <img
              src={blog.cover ? baseUrl + blog.cover : ""}
              className="card-img"
              width="348"
              height="100%"
              alt="blog cover"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link className="blog-card-title" to={`/${blog.slug}/${blog.id}`}>
              <h5 className="card-title">{blog.title}</h5>
            </Link>
            <div className="d-flex w-100 justify-content-between">
              <p>
                <small className="text-white-50">
                  {formatDate(blog.publish)}
                </small>
              </p>
              <Link to={`/${blog.slug}/${blog.id}`}>
                <img
                  src={LeftArrow}
                  height={30}
                  width={37}
                  alt="arrow"
                  loading="lazy"
                />
              </Link>
            </div>
            <div
              className="category"
              style={{
                width: "100%",
                height: "1.8rem",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <h6 className="card-subtitle">
                <small
                className="badge badge-pill p-2"
                  style={{
                    fontStyle: "italic",
                    color: "#08cc96",
                    fontWeight: "bold",
                    backgroundColor:"#fff3"
                  }}
                >
                  {category?.title}
                </small>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default BlogCard;
