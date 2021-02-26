import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Markup } from "interweave";

import BlogCard from "./BlogCard";
import SocialIcon from "../../../shared/components/SocialIcon";

import { baseUrl } from "../../../api/Constants";
import { handleGetBlog } from "../actions/index";
import { formatDate } from "../../../shared/utils/helpers";

import { TelegramIcon, TwitterIcon, FacebookIcon } from "../../../assets/index";

const Blog = ({ blog, similarBlogs, categories, dispatch, match }) => {
  const [blogFullPath, setBlogFullPath] = useState("");

  useEffect(() => {
    const id = match.params.id;
    if (id) {
      setBlogFullPath(window.location.href);
      dispatch(handleGetBlog(id));
    }
  }, [match.params.id]);

  useEffect(() => {
    if (blog) {
      const images = document.querySelectorAll(".body img");
      images.forEach((img) => {
        let imageSrc = img.getAttribute("src");
        const srcStart =  imageSrc.indexOf("/media");
        imageSrc = imageSrc.slice(srcStart);
        img.src = baseUrl + imageSrc;
      });
    }
  }, [blog]);

  const SocialIconsGroup = ({ classNames }) => (
    <div className={`share mb-4 ${classNames ? classNames : ""}`}>
      <p className="social-icon-group">
        <span className="mx-2">مشاركة في:</span>
        <SocialIcon
          icon={TelegramIcon}
          alt="telegram icon"
          link={`https://t.me/share/url?url=${blogFullPath}&text=${blog.title}`}
        />
        <SocialIcon
          icon={TwitterIcon}
          alt="twitter icon"
          link={"https://twitter.com/share?ref_src=twsrc%5Etfw"}
        />
        <SocialIcon
          icon={FacebookIcon}
          alt="facebook icon"
          link={`https://www.facebook.com/sharer.php?u=${blogFullPath}`}
        />
      </p>
    </div>
  );

  return (
    blog !== null && (
      <div className="container blog-container">
        <div className="title text-center">
          <h2>{blog.title}</h2>
        </div>
        <div className="date text-center">
          <p>{formatDate(blog.publish)}</p>
        </div>
        <SocialIconsGroup classNames="text-center" />
        <div className="blog-cover-container my-4 p-4">
          <img
            src={blog.cover ? baseUrl + blog.cover : ""}
            className="card-img cover"
            alt="blog cover"
            loading="lazy"
          />
        </div>
        <div className="body mb-4">
          <Markup content={blog.body} />
        </div>
        <div className="blog-tags">
          {
            blog.tags.map((tag)=>(
              <span key={`${blog.id}-${tag}`} className="blog-tag mx-2">{tag}</span>
            ))
          }
        </div>
        <hr />
        <SocialIconsGroup />
        {
          similarBlogs.length > 0 &&
          <div className="similar-blogs mt-4">
            <h3 className="mb-4">مدونات ذات صلة</h3>
            {similarBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                category={categories.filter(
                  (category) => category.id === blog.category
                )[0]}
              />
            ))}
          </div>
        }
      </div>
    )
  );
};

const mapStateToProps = ({ blogs }) => {
  const blog = blogs.blog;
  return {
    categories: blogs.categories,
    blog: blog ? blog.post : null,
    similarBlogs: blog?.similar_posts.length > 0 ? [...blog.similar_posts] : [],
  };
};

export default connect(mapStateToProps)(Blog);
