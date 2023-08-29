import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const images = [
    require('../img/s4-p18.png'),
    require('../img/s4-p19.png'),
    require('../img/s4-p20.png'),
    require('../img/s4-p21.png'),
    require('../img/s4-p22.png'),
    require('../img/s4-p23.png'),
    // Add more images as needed
  ];

  const Carousel3 = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: false,
      beforeChange: (current, next) => setActiveSlide(next),
    };

    return (
      // <div style={{ maxWidth: '300px' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className={`slide ${index === activeSlide ? 'slide-active' : ''}`} >
              <img src={image} alt="" />
            </div>
          ))}
        </Slider>
      // </div>
    );
  };

  export default Carousel3;
