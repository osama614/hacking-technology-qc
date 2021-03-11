import React, { useRef, useEffect } from 'react';
import {
  FaTwitterSquare,
  FaSnapchatSquare,
  FaYoutube,
  FaTelegramPlane,
} from 'react-icons/fa';

const SocialMedia = () => {
  const socialMediaList = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      socialMediaList.current.style.display = 'block';
      setTimeout(() => {
        socialMediaList.current.style.display = 'none';
      }, 6000);
    });
  }, []);

  return (
    <ul
      ref={socialMediaList}
      className="media-list fixed-media li-space-lg p-medium px-2 py-3"
    >
      <li className="media">
        <a href="https://twitter.com/h2ckingtech/">
          <FaTwitterSquare />
        </a>
      </li>
      <li className="media">
        <a href="https://www.snapchat.com/add/tzb">
          <FaSnapchatSquare />
        </a>
      </li>
      <li className="media">
        <a href="https://www.youtube.com/channel/UC_nkNXJN-v5KXvig99sEBIw">
          <FaYoutube />
        </a>
      </li>
      <li className="media">
        <a href="https://t.me/H2ckingTech">
          <FaTelegramPlane />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
