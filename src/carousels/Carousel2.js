// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './Carousel.css';

// const images = [
//     require('../img/s4-p12.png'),
//     require('../img/s4-p13.png'),
//     require('../img/s4-p14.png'),
//     require('../img/s4-p15.png'),
//     require('../img/s4-p16.png'),
//     require('../img/s4-p17.png'),
//     // Add more images as needed
//   ];

//   const Carousel2 = () => {
//     const [activeSlide, setActiveSlide] = useState(0);

//     const settings = {
//       infinite: true,
//       speed: 300,
//       slidesToShow: 1,
//       centerMode: true,
//       slidesToScroll: 1,
//       swipeToSlide: true,
//       arrows: false,
//       beforeChange: (current, next) => setActiveSlide(next),
//     };

//     return (
//       // <div style={{ maxWidth: '300px' }}>
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div key={index} className={`slide ${index === activeSlide ? 'slide-active' : ''}`} >
//               <img src={image} alt="" />
//             </div>
//           ))}
//         </Slider>
//       // </div>
//     );
//   };

//   export default Carousel2;
