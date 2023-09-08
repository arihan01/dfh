// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Carousel.css';

// const images = [
//   // require('../img/s4-p1.png'),
//   require('../img/s4-p2.png'),
//   // require('../img/s4-p3.png'),
//   require('../img/s4-p4.png'),
//   // require('../img/s4-p5.png'),
//   require('../img/s4-p6.png'),
//   // require('../img/s4-p7.png'),
//   require('../img/s4-p8.png'),
//   // require('../img/s4-p9.png'),
//   require('../img/s4-p10.png'),
//   require('../img/s4-p11.png'),
//   // Add more images as needed
// ];

// const Carousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   // const settings = {
//   //   infinite: true,
//   //   speed: 300,
//   //   slidesToShow: 1,
//   //   centerMode: true,
//   //   slidesToScroll: 1,
//   //   swipeToSlide: true,
//   //   arrows: false,
//   //   beforeChange: (current, next) => setActiveSlide(next),
//   // };

//   const settings = {
//     infinite: true,
//     speed: 300,
//     centerMode: true,
//     slidesToShow: 2.4,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     // swipeToSlide: true,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     beforeChange: (current, next) => setActiveSlide(next),
//   };

//   return (
//     // <div style={{ maxWidth: '1000px' }}>
//     <Slider {...settings}>
//       {images.map((image, index) => (
//         <div key={index} className={`slide ${index === activeSlide ? 'slide-active' : ''}`} >
//           <img src={image} alt="" />
//         </div>
//       ))}
//     </Slider>
//     // </div>
//   );
// };

// export default Carousel;
