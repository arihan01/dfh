import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './App.css';
import * as animate from './animations';
import { motion } from 'framer-motion';
import * as svgs from './svgs.js';
import Carousel from './Carousel';

const App = () => {
  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-img-1 bg-common">
          <motion.img
            src={require('./img/s1-rect.png')}
            className='absolute bottom-0 h-2/3'
            {...animate.downToUp}
          />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-img-2 bg-common">
          <motion.div
            className='mb-14 w-2/3'
            {...animate.leftToRight}
          >
            <svgs.s2Text1 className='w-full h-auto' />
          </motion.div>
          <motion.div
            className='mt-14 w-2/3'
            {...animate.rightToLeft}
          >
            <svgs.s2Text2 className='w-full h-auto' />
          </motion.div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-img-3 bg-common">
          <motion.div
            className='w-full h-auto animate.rectList'
            variants={animate.rectList}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className='mb-14 w-2/3 mx-auto'
              variants={animate.rectItem}
            >
              <svgs.s3Text1 className='w-full h-auto' />
            </motion.div>
            <motion.img
              src={require('./img/s3-img.png')}
              className='mb-14 mx-auto'
              variants={animate.rectItem}
            />
            <motion.div
              className='mb-14 w-2/3 mx-auto'
              variants={animate.rectItem}
            >
              <svgs.s3Text2 className='w-full h-auto' />
            </motion.div>
          </motion.div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-common">
          <div className='w-full mb-5 bg-btnPurple p-5'>
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <Carousel />
            </div>
          </div>
          <motion.div className='w-3/5 mb-12' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 0 }}>
            <svgs.s4Text1 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-3/5 mb-12 mr-12' {...animate.rightToLeft} transition={{ ...animate.rightToLeft.transition, delay: 0.6 }}>
            <svgs.s4Text2 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-3/5 ml-12' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 1.2 }}>
            <svgs.s4Text3 className='w-full h-auto' />
          </motion.div>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-img-5 bg-common">
          <motion.img src={require('./img/s5-img-1.png')} className='w-3/4 mb-20' {...animate.fadeIn} />
          <motion.img src={require('./img/s5-img-2.png')} className='w-3/4 mt-20' {...animate.fadeIn} />
        </div>
      ),
    },
    {
      id: 6,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-common">
        </div>
      )
    },
    {
      id: 7,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-common">
        </div>
      )
    },
    {
      id: 8,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-common">
        </div>
      )
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  // const [imagesLoaded, setImagesLoaded] = useState(false);

  // useEffect(() => {
  //   const imagePromises = slides.map(slide =>
  //     Array.from(slide.content.props.children)
  //       .filter((child) => child.props && child.props.src)
  //       .map(img => new Promise(resolve => {
  //         const imageElement = new Image();
  //         imageElement.onload = resolve;
  //         imageElement.src = img.props.src;
  //       }))
  //   );

  //   Promise.all(imagePromises.flat())
  //     .then(() => setImagesLoaded(true))
  //     .catch(() => setImagesLoaded(true)); // Handle errors, e.g., if an image fails to load
  // }, [slides]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative h-screen lg:w-1/4 md:w-1/2 mx-auto overflow-hidden">
      {/* {!imagesLoaded && (
        // <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-purple-500">
        //   viamagus
        // </div>
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )} */}

      {/* {imagesLoaded && ( */}
      <React.Fragment>
        {/* Render dot indicators */}
        <div className="absolute top-0 left-0 right-0 flex justify-center mt-10 mb-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-2.5 h-2.5 mx-1.5 rounded-full ${index <= currentSlide ? 'bg-darkG' : 'bg-lightG'}`}
            ></div>
          ))}
        </div>


        {/* Render navigation buttons */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-between">
          <button className="mx-2 px-2" onClick={goToPreviousSlide}>
            <img src={require('./img/nav left.png')} style={{ width: '13.61px', height: '35px' }} alt='btnPrev' />
          </button>
          <button className="mx-2 px-2" onClick={goToNextSlide}>
            <img src={require('./img/nav right.png')} style={{ width: '13.61px', height: '35px' }} alt='btnNext' />
          </button>
        </div>

        <div className="flex items-center justify-center h-full">
          <Slide
            key={slides[currentSlide].id}
            content={slides[currentSlide].content}
          />
        </div>
      </React.Fragment>
      {/* )} */}
    </div>
  );
};

export default App;