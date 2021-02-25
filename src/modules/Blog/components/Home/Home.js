import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";

import BlogsList from "../BlogsList";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import FeaturedBlogs from "./FeaturedBlogs";

import { handleGetCategories, handleGetBlogs } from "../../actions/index";
import Blog from "../Blog";

const Home = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleGetCategories());
    dispatch(handleGetBlogs());
  }, [dispatch]);

  const homeContainer = () => (
    <>
      <FeaturedBlogs />
      <BlogsList />
    </>
  );

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container home">
          <>
            <Route path="/" exact component={homeContainer} />
            <Route path="/:id" component={Blog} />
            <Route
              path={["/http:", "/https:"]}
              component={(props) => {
                window.location.replace(props.location.pathname.substr(1));
                return null;
              }}
            />
          </>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default withRouter(connect()(Home));
