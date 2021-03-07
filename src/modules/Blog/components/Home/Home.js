import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SocialMedia from "../layout/SocialMedia";
import AboutUs from "../../../../shared/components/StaticContent/AboutUs";
import ContactUs from "../ContactUs";
import FeaturedBlogs from "./FeaturedBlogs";
import BlogsList from "../BlogsList";
import PrivacyPolicy from "../../../../shared/components/StaticContent/PrivacyPolicy";
import TermsOfUse from "../../../../shared/components/StaticContent/TermsOfUse";
import NotFound from "./../../../../shared/components/NotFound";

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
        <div className="container home px-0">
          <Switch>
              <Route path="/notfound" component={NotFound} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/terms-of-use" component={TermsOfUse} />
              <Route exact path="/:slug/:id" component={Blog} />
              <Route exact path="/" component={homeContainer} />
          <Redirect to="/notfound" />
          </Switch>
        </div>
        <SocialMedia />
        <Footer />
      </div>
  );
};

export default withRouter(connect()(Home));
