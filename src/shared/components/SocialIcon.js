import React from "react";

const SocialIcon = ({ icon, alt, link }) => (
  <a target="_blank" rel="noopener noreferrer" href={link}>
    <img src={icon} className="sharing-icons" alt={alt} loading="lazy" />
  </a>
);

export default SocialIcon;
