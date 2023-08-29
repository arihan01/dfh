import React from "react";

const Slide = ({ content }) => {
  return (
    <div className=" h-screen flex items-center justify-center flex-grow inset-0 ">
      {content}
    </div>
  );
};

export default Slide;
