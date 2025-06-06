
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function CarouselWrapper({ children }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return <div className="slider-container">
    <Slider  {...settings}>
      {children}
    </Slider>
  </div>
}
export default CarouselWrapper