import { GET_CATEGORIES, GET_BLOGS, GET_BLOG } from "./types";
import {
  getCategoriesList,
  getBlogsList,
  getBlogDetails,
} from "../../../api/BlogsApi";
// import { showLoading, hideLoading } from "react-redux-loading";

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    categories: [...categories],
  };
}

export function getBlogs(blogs) {
  return {
    type: GET_BLOGS,
    blogs: [...blogs],
  };
}

export function getBlog(blog) {
  return {
    type: GET_BLOG,
    blog: { ...blog },
  };
}

export function handleGetCategories() {
  return (dispatch) => {
    return getCategoriesList()
      .then((res) => res.data)
      .then((categories) => dispatch(getCategories(categories)));
  };
}

export function handleGetBlogs() {
  return (dispatch) => {
    return getBlogsList()
      .then((res) => res.data)
      .then((blogs) => dispatch(getBlogs(blogs)));
  };
}

export function handleGetBlog(id) {
  return (dispatch) => {
    return getBlogDetails(id)
      .then((res) => res.data)
      .then((blog) => dispatch(getBlog(blog)));
  };
}
