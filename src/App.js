import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import './App.css';
import * as animate from './animations';
import { motion } from 'framer-motion';
import * as svgs from './svgs.js';
import Carousel from './carousels/Carousel';
import Carousel2 from './carousels/Carousel2';
import Carousel3 from './carousels/Carousel3';
import Carousel4 from './carousels/Carousel4';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const App = () => {
  const [imageStates, setImageStates] = useState([true, true, true, true]);

  const toggleImage = (index) => {
    const newImageStates = [...imageStates];
    newImageStates[index] = !newImageStates[index];
    setImageStates(newImageStates);
  };

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
          {/* <motion.img
            src={require('./img/s1-rect.png')}
            className='w-auto h-4/5'
            {...animate.downToUp}
          /> */}
          <motion.div className='w-4/5 mb-36' {...animate.downToUp}>
            <svgs.S1Logo className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-1/3 mt-36' {...animate.fadeIn}>
            <svgs.S1Text className='w-full h-auto' />
          </motion.div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
          <motion.div
            className='mb-16 w-3/4'
            {...animate.leftToRight}
          >
            <svgs.s2Text1 className='w-full h-auto' />
          </motion.div>
          {/* <motion.div className='mb-20 w-1/3 mr-12' {...animate.leftToRight}>
            <svgs.s2UL className='w-full h-auto' />
          </motion.div> */}
          <motion.div
            className='mt-16 w-3/5'
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
        <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
          {/* <motion.div
            className='w-full h-auto animate.rectList'
            variants={animate.rectList}
            initial="initial"
            animate="animate"
          > */}
          <motion.div
            className='mb-10 mt-5 w-1/2 mx-auto'
            // variants={animate.rectItem}
            {...animate.fadeIn} transition={{ ...animate.fadeIn.transition, delay: 0 }}
          >
            <svgs.s3Text1 className='w-full h-auto' />
          </motion.div>
          <motion.img
            src={require('./img/s3-img.png')}
            className='mb-10 mx-auto w-2/3'
            // variants={animate.rectItem}
            {...animate.fadeIn} transition={{ ...animate.fadeIn.transition, delay: 0.8 }}
          />
          <motion.div
            className=' w-3/4 mx-auto'
            // variants={animate.rectItem}
            {...animate.fadeIn} transition={{ ...animate.fadeIn.transition, delay: 1.6 }}
          >
            <svgs.s3Text2 className='w-full h-auto' />
          </motion.div>
          {/* </motion.div> */}
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-white bg-common">
          <motion.div className='w-full mb-3 mt-11 blue-bg p-2 ' {...animate.fadeIn} transition={{ ...animate.fadeIn.transition, delay: 0 }}>
            <div style={{ maxWidth: '40vh', margin: '0 auto' }} >
              <Carousel />
            </div>
          </motion.div>
          {/* <motion.div className='w-1/2 mb-20 ml-12' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 0 }}>
            <svgs.s4Text1 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-1/2 mb-20 mr-14' {...animate.rightToLeft} transition={{ ...animate.rightToLeft.transition, delay: 0.6 }}>
            <svgs.s4Text2 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-1/2 ml-14' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 1.2 }}>
            <svgs.s4Text3 className='w-full h-auto' />
          </motion.div> */}
          <motion.div className='w-full mb-3 orange-bg p-2 ' {...animate.fadeIn} transition={{ ...animate.fadeIn.transition, delay: 0.8 }}>
            <div style={{ maxWidth: '40vh', margin: '0 auto' }}>
              <Carousel3 />
            </div>
          </motion.div>
          <motion.div className='w-full red-bg p-2 ' {...animate.fadeIn} transition={{ ...animate.fadeIn.transition, delay: 1.6 }}>
            <div style={{ maxWidth: '40vh', margin: '0 auto' }}>
              <Carousel4 />
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      id: 5,
      content: (
        <div className="flex flex-col items-center justify-center h-full black-bg bg-img-5 bg-common">
          {/* <motion.img src={require('./img/s5-img-1.png')} className='w-3/4 mb-20' {...animate.fadeIn} />
          <motion.img src={require('./img/s5-img-2.png')} className='w-3/4 mt-20' {...animate.fadeIn} /> */}
          <motion.div className='w-4/5 mb-16' {...animate.leftToRight}>
            <svgs.s5Text1 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-4/5' {...animate.rightToLeft}>
            <svgs.s5Text2 className='w-full h-auto' />
          </motion.div>
        </div>
      ),
    },
    {
      id: 6,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-img-6 bg-common">
          {/* <motion.div className='w-3/4 mb-5' {...animate.fadeIn}>
            <svgs.s6Top className='w-full h-auto' />
          </motion.div>
          <motion.img src={require('./img/s6-img.png')} className='w-4/5 rounded-lg mt-5 mb-5' {...animate.fadeIn} />
          <motion.img src={require('./img/s6-text.png')} className='w-full mt-5 px-5' {...animate.fadeIn} /> */}
          <motion.div className='w-1/2 absolute top-28 mr-32' {...animate.leftToRight}>
            <svgs.s6Text className='w-full h-auto' />
          </motion.div>

        </div>
      )
    },
    {
      id: 7,
      content: (
        <div className="flex flex-col items-center justify-center h-full black-bg bg-common">
          {/* <motion.img src={require('./img/s7-img.png')}/> */}
          <TransformWrapper>
            <TransformComponent>
              <motion.img src={require('./img/s7-img.png')} />
            </TransformComponent>
          </TransformWrapper>
          <motion.img src={require('./img/s7-text.png')} className='w-1/5 mt-1' {...animate.fadeIn} />
          <motion.img src={require('./img/s7-text-2.png')} className='w-3/5 mt-5' {...animate.fadeIn} />
          <motion.img src={require('./img/s7-lines.png')} className='w-4/5 mt-10 mb-5' {...animate.downToUp} />
          <motion.img src={require('./img/s7-icons.png')} className='w-4/5' {...animate.downToUp} />
        </div>
      ),
    },
    {
      id: 8,
      content: (
        <div className="flex flex-col items-center justify-center h-full orange-bg bg-common">
          {/* <motion.img src={require('./img/s7-top.png')} className='w-3/4 mb-10 absolute top-[90px]' {...animate.fadeIn} /> */}
          <motion.div className='w-1/2 mt-16'> 
            <svgs.s8Top className='w-full h-auto' /> {/* title */}
          </motion.div>
          <motion.div className='w-3/4' {...animate.upToDown} transition={{ ...animate.upToDown.transition, delay: 0 }}>
            {imageStates[0] ? (
              <motion.img //year
                src={require('./img/s8-2023.png')}
                className='w-2/5 mx-auto mb-1 image-button'
                onClick={() => toggleImage(0)}
                {...animate.fadeIn}
              />
            ) : (
              <motion.div
                className='w-full mb-3 mt-5' //text
                onClick={() => toggleImage(0)}
                {...animate.fadeIn}
              >
                <svgs.s8Text1 className='w-full h-auto my-1' /> 
              </motion.div>
            )}
          </motion.div>
          <motion.div className='w-3/4 mt-3' {...animate.upToDown} transition={{ ...animate.upToDown.transition, delay: 0.8 }}>
            {imageStates[1] ? (
              <motion.img //year
                src={require('./img/s8-2024.png')}
                className='w-2/5 mx-auto mb-1 image-button'
                onClick={() => toggleImage(1)}
                {...animate.fadeIn}
              />
            ) : (
              <motion.div
                className='w-full mb-3' //text
                onClick={() => toggleImage(1)}
                {...animate.fadeIn}
              >
                <svgs.s8Text2 className='w-full h-auto my-1' />
              </motion.div>
            )}
          </motion.div>
          <motion.div className='w-3/4 mt-3' {...animate.upToDown} transition={{ ...animate.upToDown.transition, delay: 1.6 }}>
            {imageStates[2] ? (
              <motion.img //year
                src={require('./img/s8-2025.png')}
                className='w-2/5 mx-auto mb-1 image-button'
                onClick={() => toggleImage(2)}
                {...animate.fadeIn}
              />
            ) : (
              <motion.div
                className='w-full mb-3' //text
                onClick={() => toggleImage(2)}
                {...animate.fadeIn}
              >
                <svgs.s8Text3 className='w-full h-auto my-1' />
              </motion.div>
            )}
          </motion.div>
          <motion.div className='w-3/4 mt-3' {...animate.upToDown} transition={{ ...animate.upToDown.transition, delay: 2.4 }}>
            {imageStates[3] ? (
              <motion.img //year
                src={require('./img/s8-2026.png')}
                className='w-2/5 mx-auto mb-1 image-button'
                onClick={() => toggleImage(3)}
                {...animate.fadeIn}
              />
            ) : (
              <motion.div
                className='w-full' //text
                onClick={() => toggleImage(3)}
                {...animate.fadeIn}
              >
                <svgs.s8Text4 className='w-full h-auto my-1' />
              </motion.div>
            )}
          </motion.div>
        </div>
      )
    },
    {
      id: 9,
      content: (
        <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
          {/* <motion.img src={require('./img/s9-top.png')} className='w-4/5 mb-10 mt-2' {...animate.fadeIn} /> */}
          <motion.div className='w-4/5 mt-5'>
            <svgs.s9Top className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-3/4 mt-10 mb-5' >
            <svgs.s9Text1 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-3/4 mt-5 mb-5' >
            <svgs.s9Text2 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-3/4 mt-5' >
            <svgs.s9Text3 className='w-full h-auto' />
          </motion.div>
        </div>
      )
    },
    {
      id: 10,
      content: (
        <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
          {/* <motion.img src={require('./img/s9-top.png')} className='w-4/5 mb-5' {...animate.fadeIn} /> */}
          {/* <motion.img src={require('./img/s9-img-1.png')} className='w-3/4 mt-5' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0 }} />
          <motion.img src={require('./img/s9-img-2.png')} className='w-3/4' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0.6 }} />
          <motion.img src={require('./img/s9-img-3.png')} className='w-3/4' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 1.2 }} /> */}
          <motion.div className='w-2/3 mb-1 mt-5' {...animate.fadeIn}>
            <svgs.s10Top className='w-full h-auto' />
          </motion.div>
          {/* <motion.div className='w-2/3 mb-4' {...animate.fadeIn}>
            <svgs.s2UL className='w-full h-auto' />
          </motion.div> */}
          <motion.img src={require('./img/s10-img-1.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0 }} className='mb-3' />
          <motion.img src={require('./img/s10-img-2.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0.6 }} className='mb-3' />
          <motion.img src={require('./img/s10-img-3.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 1.2 }} />
        </div>
      )
    },
    {
      id: 11,
      content: (
        <div className="flex flex-col items-center justify-center h-full blue-bg bg-common">
          <motion.div className='w-1/2 mb-10 mt-auto' {...animate.leftToRight}>
            <svgs.s11Top className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-3/4 mt-10 mb-auto' {...animate.downToUp}>
            <svgs.s11Img className='w-full h-auto' />
          </motion.div>
        </div>
      )
    },
    {
      id: 12,
      content: (
        <div className="flex flex-col items-center justify-center h-full bg-paperG bg-img-11 bg-common">
          <motion.div className='w-2/3 mb-10' {...animate.fadeIn}>
            <svgs.s12Top className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-4/5 mb-5' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 0 }}>
            <svgs.s12Text1 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-4/5 mb-5' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 0.6 }}>
            <svgs.s12Text2 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-4/5 mb-5' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 1.2 }}>
            <svgs.s12Text3 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-4/5 mb-5' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 1.8 }}>
            <svgs.s12Text4 className='w-full h-auto' />
          </motion.div>
          <motion.div className='w-4/5 mb-5' {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 2.4 }}>
            <svgs.s12Text5 className='w-full h-auto' />
          </motion.div>
          {/* <motion.img src={require('./img/s12-img.png')} className='w-2/3' {...animate.downToUp} /> */}
          <div className='flex flex-col items-center space-y-2'>
            <div className="flex justify-center space-x-2">
              <motion.img src={require('./img/hh.png')} className="w-24 h-24" {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 0 }} />
              <motion.img src={require('./img/ap.png')} className="w-24 h-24" {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 0.6 }} />
            </div>
            <div className="flex justify-center space-x-2">
              <motion.img src={require('./img/mm.png')} className="w-24 h-24" {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 1.2 }} />
              <motion.img src={require('./img/ke.png')} className="w-24 h-24" {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 1.8 }} />
              <motion.img src={require('./img/mu.png')} className="w-24 h-24" {...animate.leftToRight} transition={{ ...animate.leftToRight.transition, delay: 2.4 }} />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 13,
      content: (
        <div className="flex flex-col items-center justify-center h-full white-bg bg-common">

          <motion.div className='w-4/5 mt-28' {...animate.rightToLeft}>
            <svgs.s13Q className='w-full h-auto' />
          </motion.div>
          {/* <motion.a href="https://www.mycelium.today/" target="_blank" rel="noopener noreferrer" className='w-2/3 mt-auto image-button' {...animate.fadeIn}>
            <img src={require('./img/s13-btn.png')} />
          </motion.a> */}
          {/* <motion.div className='w-3/4 mt-5' {...animate.downToUp}>
            <svgs.s11Text2 className='w-full h-auto' />
          </motion.div> */}
          <motion.img src={require('./img/s13-img.png')} className='w-1/2' {...animate.fadeIn}/>
          <motion.div className='w-2/3 mt-5' {...animate.fadeIn}>
            <svgs.s13Text className='w-full h-auto'/>
          </motion.div>
          <motion.div className='w-1/2 mt-auto' {...animate.downToUp}>
            <svgs.s13C className='w-full h-auto' />
          </motion.div>
          <div className="flex justify-center space-x-16 pb-10 mt-auto">
            <a href="https://www.instagram.com/dancingfroghabitat/" target="_blank" rel="noopener noreferrer">
              <motion.div >
                <svgs.s13Ig className="w-7 h-7" />
              </motion.div>
            </a>
            <a href="https://www.linkedin.com/company/mycelium-ecology/" target="_blank" rel="noopener noreferrer">
              <motion.div >
                <svgs.s13In className="w-7 h-7" />
              </motion.div>
            </a>
          </div>
        </div>
      )
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  // const [imagesLoaded, setImagesLoaded] = useState(false);

  // useEffect(() => {
  //   const findImages = (element) => {
  //     if (!element || !element.props) {
  //       return [];
  //     }

  //     if (element.type === 'img' && element.props.src) {
  //       return [element];
  //     }

  //     if (Array.isArray(element.props.children)) {
  //       return element.props.children.flatMap(findImages);
  //     }

  //     return findImages(element.props.children);
  //   };

  //   const imageElements = slides.flatMap(slide => findImages(slide.content));

  //   if (imageElements.length === 0) {
  //     // No images to load, so we're done
  //     setImagesLoaded(true);
  //     return;
  //   }

  //   const imagePromises = imageElements.map(img => new Promise((resolve, reject) => {
  //     const imageElement = new Image();
  //     imageElement.onload = resolve;
  //     imageElement.onerror = reject;
  //     imageElement.src = img.props.src;
  //   }));

  //   Promise.all(imagePromises)
  //     .then(() => setImagesLoaded(true))
  //     .catch((error) => {
  //       console.error('Failed to load image', error);
  //       setImagesLoaded(true); // We're done, even though an image failed to load
  //     });
  // }, [slides]);

  const [areAllImagesLoaded, setAreAllImagesLoaded] = useState(false);

  useEffect(() => {
    const imageElements = document.querySelectorAll('img');
    const imageArray = Array.from(imageElements).map(img => img.src);

    const loadImages = imageArray.map(imagePath => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = imagePath;
      });
    });

    Promise.all(loadImages)
      .then(() => setAreAllImagesLoaded(true))
      .catch(err => console.log('Some images failed to load', err));

  }, [])

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
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}  */}
      {!areAllImagesLoaded && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      )}
      {/* {imagesLoaded && ( */}
      {areAllImagesLoaded && (
        <React.Fragment>
          {/* Render dot indicators */}
          <div className="absolute top-0 left-0 right-0 flex justify-center mt-10 mb-2">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`w-3 h-3 mx-1.5 rounded-full ${index <= currentSlide ? 'bg-darkG border-2' : 'bg-lightG'}`}
              ></div>
            ))}
          </div>


          {/* Render navigation buttons */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between" style={{ pointerEvents: 'none' }}>
            <button className="" onClick={goToPreviousSlide} style={{ pointerEvents: 'auto' }}>
              <img src={require('./img/nav left.png')} className='w-8 h-auto' alt='btnPrev' />
            </button>
            <button className="" onClick={goToNextSlide} style={{ pointerEvents: 'auto' }}>
              <img src={require('./img/nav right.png')} className='w-8 h-auto' alt='btnNext' />
            </button>
          </div>

          <div className="flex items-center justify-center h-full">
            <Slide
              key={slides[currentSlide].id}
              content={slides[currentSlide].content}
            />
          </div>
        </React.Fragment>
      )}
      {/* )} */}
    </div>
  );
};

export default App;