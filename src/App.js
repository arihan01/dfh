import React, { useState } from "react";
import Slide from "./Slide";
import "./App.css";
import * as svgs from "./svgs";
import loadable from "@loadable/component";
// import Slide3 from "./slides/Slide3";
// import Slide4 from "./slides/Slide4";
// import Slide5 from "./slides/Slide5";
// import Slide6 from "./slides/Slide6";
// import Slide7 from "./slides/Slide7";
// import Slide8 from "./slides/Slide8";
// import Slide9 from "./slides/Slide9";
// import Slide10 from "./slides/Slide10";
// import Slide11 from "./slides/Slide11";
// import Slide12 from "./slides/Slide12";
// import Slide13 from "./slides/Slide13";
function loadableSlide(slideNumber) {
  return loadable(() => import(`./slides/Slide${slideNumber}`), {
    fallback: (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-Mgreen"></div>
      </div>
    ),
  });
}

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
      <React.Fragment>
        {/* Render dot indicators */}
        <div className="absolute top-0 left-0 right-0 flex justify-center mt-10 mb-2">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`w-3 h-3 mx-1.5 rounded-full ${
                index <= currentSlide ? "bg-darkG border-2" : "bg-lightG"
              }`}
            ></div>
          ))}
        </div>
        {/* Render navigation buttons */}
        <div
          className="absolute top-1/2 left-0 right-0 flex justify-between"
          style={{ pointerEvents: "none", zIndex: 10 }}
        >
          <button
            className="ml-1"
            onClick={goToPreviousSlide}
            style={{ pointerEvents: "auto" }}
          >
            {/* <img
              src={require("./img/nav left.png")}
              className="w-8 h-auto"
              alt="btnPrev"
            /> */}
            <svgs.Prev className="w-8 h-auto" />
          </button>
          <button
            className="mr-1"
            onClick={goToNextSlide}
            style={{ pointerEvents: "auto" }}
          >
            {/* <img
              src={require("./img/nav right.png")}
              className="w-8 h-auto"
              alt="btnNext"
            /> */}
            <svgs.Next className="w-8 h-auto" />
          </button>
        </div>
        <div className="flex items-center justify-center h-full">
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
