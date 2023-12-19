import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import "./App.css";
import { ReactComponent as Next } from "./img/Next.svg";
import { ReactComponent as Prev } from "./img/Prev.svg";
import { app, analytics } from './firebase';
import loadable from "@loadable/component";

// Function to dynamically load slides
function loadableSlide(slideNumber) {
  return loadable(() => import(`./slides/Slide${slideNumber}`), {
    fallback: (
      // Fallback component while slide is loading
      <div className="white-bg flex h-full w-full items-center justify-center object-cover">
        <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-t-2 border-Mgreen"></div>
      </div>
    ),
  });
}

// Dynamically load each slide component
const Slide1 = loadableSlide(1);
const Slide2 = loadableSlide(2);
const Slide3 = loadableSlide(3);
const Slide4 = loadableSlide(4);
const Slide5 = loadableSlide(5);
const Slide6 = loadableSlide(6);
const Slide7 = loadableSlide(7);
const Slide8 = loadableSlide(8);
const Slide9 = loadableSlide(9);
const Slide10 = loadableSlide(10);
const Slide11 = loadableSlide(11);
const Slide12 = loadableSlide(12);
const Slide13 = loadableSlide(13);

const App = () => {
  const slides = [
    // Array of slide objects with id and content
    {
      id: 1,
      content: <Slide1 />,
    },
    {
      id: 2,
      content: <Slide2 />,
    },
    {
      id: 3,
      content: <Slide3 />,
    },
    {
      id: 4,
      content: <Slide4 />,
    },
    {
      id: 5,
      content: <Slide5 />,
    },
    {
      id: 6,
      content: <Slide6 />,
    },
    {
      id: 7,
      content: <Slide7 />,
    },
    {
      id: 8,
      content: <Slide8 />,
    },
    {
      id: 9,
      content: <Slide9 />,
    },
    {
      id: 10,
      content: <Slide10 />,
    },
    {
      id: 11,
      content: <Slide11 />,
    },
    {
      id: 12,
      content: <Slide12 />,
    },
    {
      id: 13,
      content: <Slide13 />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  // Function to go to the previous slide
  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1,
    );
  };

  useEffect(() => {
    // Scroll to the bottom of the page after 2 seconds
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 2000);
  }, []);

  return (
    <div className="relative mx-auto h-[100lvh] overflow-hidden md:w-3/4 lg:w-2/5 xl:w-1/4">
      <React.Fragment>
        {/* Render dot indicators */}
        <div className="absolute left-0 right-0 top-0 mt-5 flex justify-center">
          {slides.map((slide, index) => (
            // Dot indicator for each slide
            <div
              key={slide.id}
              className={`mx-1.5 h-[1.3vh] w-[1.3vh] rounded-full ${
                index <= currentSlide ? "border-2 bg-darkG" : "bg-lightG"
              }`}
            ></div>
          ))}
        </div>
        {/* Render navigation buttons */}
        <div
          className="absolute left-0 right-0 top-1/2 flex justify-between"
          style={{ pointerEvents: "none", zIndex: 10 }}
        >
          <button
            className="ml-1"
            onClick={goToPreviousSlide}
            style={{ pointerEvents: "auto" }}
          >
            {/* Previous slide button */}
            <Prev className="h-auto w-8" />
          </button>
          <button
            className="mr-1"
            onClick={goToNextSlide}
            style={{ pointerEvents: "auto" }}
          >
            {/* Next slide button */}
            <Next className="h-auto w-8" />
          </button>
        </div>
        <div className="flex h-full w-full">
          {/* Render current slide */}
          <Slide
            key={slides[currentSlide].id}
            content={slides[currentSlide].content}
          />
        </div>
      </React.Fragment>
    </div>
  );
};

export default App;
