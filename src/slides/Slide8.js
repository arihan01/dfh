import React, { useState } from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide8() {
  const [imageStates, setImageStates] = useState([true, true, true, true]);

  const toggleImage = (index) => {
    const newImageStates = [...imageStates];
    newImageStates[index] = !newImageStates[index];
    setImageStates(newImageStates);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full orange-bg bg-common">
      {/* <motion.img src={require('./img/s7-top.png')} className='w-3/4 mb-10 absolute top-[90px]' {...animate.fadeIn} /> */}
      <motion.div className="w-1/2 mt-16">
        <svgs.s8Top className="w-full h-auto" /> {/* title */}
      </motion.div>
      <motion.div
        className="w-3/4"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 0 }}
      >
        {imageStates[0] ? (
          <motion.img //year
            src={require("../img/s8-2023.png")}
            className="w-2/5 mx-auto mb-1 image-button"
            onClick={() => toggleImage(0)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="w-full mb-3 mt-5" //text
            onClick={() => toggleImage(0)}
            {...animate.fadeIn}
          >
            <svgs.s8Text1 className="w-full h-auto my-1" />
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className="w-3/4 mt-3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 0.8 }}
      >
        {imageStates[1] ? (
          <motion.img //year
            src={require("../img/s8-2024.png")}
            className="w-2/5 mx-auto mb-1 image-button"
            onClick={() => toggleImage(1)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="w-full mb-3" //text
            onClick={() => toggleImage(1)}
            {...animate.fadeIn}
          >
            <svgs.s8Text2 className="w-full h-auto my-1" />
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className="w-3/4 mt-3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 1.6 }}
      >
        {imageStates[2] ? (
          <motion.img //year
            src={require("../img/s8-2025.png")}
            className="w-2/5 mx-auto mb-1 image-button"
            onClick={() => toggleImage(2)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="w-full mb-3" //text
            onClick={() => toggleImage(2)}
            {...animate.fadeIn}
          >
            <svgs.s8Text3 className="w-full h-auto my-1" />
          </motion.div>
        )}
      </motion.div>
      <motion.div
        className="w-3/4 mt-3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 2.4 }}
      >
        {imageStates[3] ? (
          <motion.img //year
            src={require("../img/s8-2026.png")}
            className="w-2/5 mx-auto mb-1 image-button"
            onClick={() => toggleImage(3)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="w-full" //text
            onClick={() => toggleImage(3)}
            {...animate.fadeIn}
          >
            <svgs.s8Text4 className="w-full h-auto my-1" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
