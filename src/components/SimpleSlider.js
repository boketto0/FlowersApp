import React from "react";
import Slider from "react-slick";

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        8
      </div>
      <div>
        9
      </div>
      <div>
        2
      </div>
    </Slider>
  );
};
