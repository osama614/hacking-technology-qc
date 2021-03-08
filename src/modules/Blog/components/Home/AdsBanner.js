import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

const AdsBanner = ({ homeAds }) => {
  const delay = 2500;

  const [urgentAd, setUrgentAd] = useState(null);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    const urgent = homeAds.filter((ad) => ad.urgent === true)[0];
    if (urgent) {
      setUrgentAd({ ...urgent });
    }
  }, [homeAds]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === homeAds.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, homeAds.length]);

  return urgentAd ? (
    <div className="home-ad-container text-center mx-auto">
      <p className="mb-0">{urgentAd.news}</p>
    </div>
  ) : (
    <div className="home-ad-container text-center mx-auto">
      <marquee behavior="scroll" direction="right" scrollamount="15">
        {homeAds.map((ad) => (
          <font key={ad.id} className="mb-0">
            {ad.news} ✤{" "}
          </font>
        ))}
      </marquee>
    </div>
  );
};

const mapStateToProps = ({ blogs }) => {
  return {
    homeAds: blogs.homeAds,
  };
};

export default connect(mapStateToProps)(AdsBanner);
