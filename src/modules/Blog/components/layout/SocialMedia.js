import React from "react";
import { Link } from "react-router-dom";

import {
  FacebookLogo,
  TwitterLogo,
  YouTubeLogo,
  LinkedInLogo,
} from "../../../../assets/index";

const SocialMedia = () => {
  return (
    <ul className="media-list fixed-media li-space-lg p-medium px-0 py-3">
      <li className="media">
        <Link to="/">
          <img src={FacebookLogo} alt="facebook logo" />
        </Link>
      </li>
      <li className="media">
        <Link to="/">
          <img src={TwitterLogo} alt="twitter logo" />
        </Link>
      </li>

      <li className="media">
        <Link to="/">
          <img src={YouTubeLogo} alt="youtube logo" />
        </Link>
      </li>
      <li className="media">
        <Link to="/">
          <img src={LinkedInLogo} alt="linkedin logo" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
