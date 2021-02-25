import { GET_CATEGORIES, GET_BLOGS, GET_BLOG } from "../actions/types";

const initialState = {
  categories: [],
  blogsList: [],
  blog: null,
};

export default function blogs(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
    case GET_BLOGS:
      return {
        ...state,
        blogsList: [...action.blogs],
      };
    case GET_BLOG:
      return {
        ...state,
        blog: { ...action.blog },
      };
    default:
      return state;
  }
}
