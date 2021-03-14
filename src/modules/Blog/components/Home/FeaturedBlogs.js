import React from "react";
import { connect } from "react-redux";
import BlogCard from "../Blog/BlogCard";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const FeaturedBlogs = ({ categories, featuredBlogs }) => {
  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return featuredBlogs.length > 0 ? (
    <div className="container home">
      <div className="featured-blogs">
        <div className="carousel-title mb-4 text-center">
          <h2>أبرز المدونات</h2>
        </div>

        <Swiper {...params}>
          {featuredBlogs.map((currentBlog, index) => (
            <div className="slide carousel-inner" key={index}>
              <BlogCard
                blog={currentBlog}
                category={
                  categories.filter(
                    (category) => category.id === currentBlog.category
                  )[0]
                }
              />
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  ) : null;

  // return featuredBlogs.length > 0 ? (
  //   <div className="featured-wrapper">
  //     <div className="container home">
  //       <div className="featured-blogs carousel slideshow">
  //         <div className="carousel-title mb-4 text-center">
  //           <h2>أبرز المدونات</h2>
  //         </div>
  //         <div
  //           className="slideshowSlider"
  //           style={{ transform: `translate3d(${index * 100}%, 0, 0)` }}
  //         >

  //           {featuredBlogs.map((currentBlog, index) => (
  //             <div className="slide carousel-inner" key={index}>
  //               <BlogCard
  //                 blog={currentBlog}
  //                 category={
  //                   categories.filter(
  //                     (category) => category.id === currentBlog.category
  //                   )[0]
  //                 }
  //               />
  //             </div>
  //           ))}
  //         </div>
  //         <button
  //           onClick={slidePrev}
  //           className="back-btn slider-arrow"
  //           disabled={index === 0}
  //         >
  //           <FaAngleRight />
  //         </button>
  //         <button
  //           onClick={slideNext}
  //           className="next-btn slider-arrow"
  //           disabled={index === featuredBlogs.length - 1}
  //         >
  //           <FaAngleLeft />
  //         </button>
  //         <div className="slideshowDots">
  //           {featuredBlogs.map((_, idx) => (
  //             <div
  //               key={idx}
  //               className={`slideshowDot${index === idx ? ' active' : ''}`}
  //               onClick={() => {
  //                 setIndex(idx);
  //               }}
  //             ></div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // ) : null;
};

const mapStateToProps = ({ blogs }) => {
  return {
    categories: blogs.categories,
    featuredBlogs: blogs.blogsList.filter((blog) => blog.important === true),
  };
};

export default connect(mapStateToProps)(FeaturedBlogs);
