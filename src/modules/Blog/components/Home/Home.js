import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SocialMedia from "../layout/SocialMedia";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import FeaturedBlogs from "./FeaturedBlogs";
import BlogsList from "../BlogsList";
import PrivacyPolicy from "../PrivacyPolicy";
import TermsOfUse from "../TermsOfUse";

import { handleGetCategories, handleGetBlogs } from "../../actions/index";
import Blog from "../Blog";

const Home = (props) => {
  const { dispatch } = props;

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
      <div>
        <Navbar currentPathname={props.location.pathname} />
        <div className="container home">
          <Switch>
              <Route
                path={["/http:", "/https:"]}
                component={(props) => {
                  window.location.replace(props.location.pathname.substr(1));
                  return null;
                }}
              />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/contact-us" component={ContactUs} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms-of-use" component={TermsOfUse} />
              <Route path="/:id" component={Blog} />
              <Route exact path="/" component={homeContainer} />
          </Switch>
        </div>
        <SocialMedia />
        <Footer />
      </div>
  );
};

export default withRouter(connect()(Home));
