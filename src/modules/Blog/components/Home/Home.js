import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import ScrollToTop from '../../../../shared/components/ScrollToTop';
import SocialMedia from '../layout/SocialMedia';
import AboutUs from '../../../../shared/components/StaticContent/AboutUs';
import ContactUs from '../ContactUs';
import FeaturedBlogs from './FeaturedBlogs';
import AdsBanner from './AdsBanner';
import BlogsList from '../Blog/BlogsList';
import Blog from '../Blog/Blog';
import PrivacyPolicy from '../../../../shared/components/StaticContent/PrivacyPolicy';
import TermsOfUse from '../../../../shared/components/StaticContent/TermsOfUse';
import NotFound from './../../../../shared/components/NotFound';
import ByTagsList from '../Blog/ByTagsList';
import Tags from '../Blog/Tags';

import {
  handleGetCategories,
  handleGetBlogs,
  handleGetHomeAds,
} from '../../actions/index';

const Home = (props) => {
  const { dispatch, homeAds, featuredBlogs } = props;

  useEffect(() => {
    dispatch(handleGetCategories());
    dispatch(handleGetBlogs());
    dispatch(handleGetHomeAds());
  }, [dispatch]);

  const homeContainer = () => (
    <div className="home">
      {featuredBlogs.length > 0 && <FeaturedBlogs />}
      <div className="container px-0">
        {homeAds && homeAds.length > 0 && <AdsBanner />}
        <BlogsList />
      </div>
    </div>
  );

  return (
    <div>
      <Navbar currentPathname={props.location.pathname} />
      <ScrollToTop />
      <Switch>
        <Route path="/notfound" component={NotFound} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-of-use" component={TermsOfUse} />
        <Route exact path="/tags" component={Tags} />
        <Route exact path="/tags/:tag" component={ByTagsList} />
        <Route exact path="/:slug/:id" component={Blog} />
        <Route exact path="/" component={homeContainer} />

        <Redirect to="/notfound" />
      </Switch>
      <SocialMedia />
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ blogs }) => {
  return {
    homeAds: blogs.homeAds,
    featuredBlogs: blogs.blogsList.filter((blog) => blog.important === true),
  };
};

export default withRouter(connect(mapStateToProps)(Home));
