import React from "react";

const Slide = ({ content }) => {
  return (
    <div className=" inset-0 flex h-screen flex-grow items-center justify-center ">
      {content}
    </div>
  );
};

export default Slide;
