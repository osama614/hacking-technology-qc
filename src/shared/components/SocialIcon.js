import React from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({ icon, alt, link }) => (
  <Link target="_blank" rel="noopener noreferrer" to={link}>
    <img src={icon} className="sharing-icons" alt={alt} loading="lazy" />
  </Link>
);

export default SocialIcon;
