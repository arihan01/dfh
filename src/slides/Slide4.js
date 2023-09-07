import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from '../svgs';
import '../App.css';
import Carousel from "../carousels/Carousel";
// import Carousel2 from "../carousels/Carousel2";
// import Carousel3 from "../carousels/Carousel3";

export default function Slide4() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      <div className="scroll-indicator  w-1/12 mt-10"><svgs.Scroll className="w-full h-auto" /></div>
      <motion.div
        className="w-full mb-1 p-2  "
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 0 }}
      >
        <div style={{ maxWidth: "35vh", margin: "0 auto" }}>
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
      {/* <motion.div
        className="w-full mb-3 orange-bg p-2 "
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 0.8 }}
      >
        <div style={{ maxWidth: "40vh", margin: "0 auto" }}>
          <Carousel2 />
        </div>
      </motion.div>
      <motion.div
        className="w-full red-bg p-2 "
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 1.6 }}
      >
        <div style={{ maxWidth: "40vh", margin: "0 auto" }}>
          <Carousel3 />
        </div>
      </motion.div> */}
      <div className="flex-col space-y-1">
        <div className="flex justify-center">
          <div className="font-bvb text-2xl">text</div>
        </div>
        <div className="flex justify-center space-x-10">
          <div className="font-bvr text-3xl">text</div>
          <div className="w-7">
            <svgs.s13Ig className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
