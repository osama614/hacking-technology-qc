import React from "react";
import { connect } from "react-redux";

const AdsBanner = ({ blogAd }) => {
  return (
    <div className="blog-ad-container text-center">
      <p className="mb-0">
        {blogAd.news} {blogAd.link ? <a href={blogAd.link}>اضغط هنا</a> : null}
      </p>
    </div>
  );
};

const mapStateToProps = ({ blogs }) => {
  return {
    blogAd: blogs.blogAd,
  };
};

export default connect(mapStateToProps)(AdsBanner);
