import React, { useState, useEffect, useRef } from 'react';
import './ImageTrack.css';

const ImageTrack = () => {
  const images = [
    require('./img/frog.png'),
    require('./img/s1-logo.png'),
    require('./img/s3-img.png'),
  ];
  
  const trackRef = useRef(null);
  const [mouseDownAt, setMouseDownAt] = useState(0.0);
  const [prevPercentage, setPrevPercentage] = useState(0.0);
  const [percentage, setPercentage] = useState(0.0);
  

  const handleOnDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0.0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;

    const mouseDelta = parseFloat(mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = parseFloat(prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    setPercentage(nextPercentage);
  };

  //Attach events
  useEffect(() => {
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("touchstart", handleOnDown);

    window.addEventListener("mouseup", handleOnUp);
    window.addEventListener("touchend", handleOnUp);

    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("touchmove", handleOnMove);

    return () => {
      // Clean up listeners on component unmount
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("touchstart", handleOnDown);

      window.removeEventListener("mouseup", handleOnUp);
      window.removeEventListener("touchend", handleOnUp);

      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("touchmove", handleOnMove);
    };
  }, [handleOnDown, handleOnUp, handleOnMove]);

  return (
    <div
      className="image-track"
      ref={trackRef}
      style={{ transform: `translate(${percentage}%, -50%)`, transition: 'transform 0.5s' }}
    >
      {images.map((src,index) => (
        <img 
          key={index} 
          className="image" 
          src={src} 
          alt={`Image ${index}`} 
          draggable="false"
          style={{objectPosition: `${100 + percentage}% center`, transition: 'object-position 0.5s'}}
        />
      ))}
    </div>
  );
};

export default ImageTrack;