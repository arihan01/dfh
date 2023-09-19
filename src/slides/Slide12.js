import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide12() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      {/* <motion.div className="w-2/3 mb-10" {...animate.fadeIn}>
        <svgs.s12Top className="w-full h-auto" />
      </motion.div> */}
      <motion.div className="font-bvb text-4xl lg:text-[5vh] md:text-5xl" {...animate.fadeIn}>
        Our
      </motion.div>
      <motion.div
        className="font-bvr text-4xl lg:text-[5vh] md:text-5xl mb-10 -mt-3"
        {...animate.fadeIn}
      >
        Partners
      </motion.div>
      <motion.div
        className="w-4/5 mb-5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 0 }}
      >
        <svgs.s12Text1 className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="w-4/5 mb-5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 0.6 }}
      >
        <svgs.s12Text2 className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="w-4/5 mb-5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 1.2 }}
      >
        <svgs.s12Text3 className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="w-4/5 mb-5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 1.8 }}
      >
        <svgs.s12Text4 className="w-full h-auto" />
      </motion.div>
      <motion.div
        className="w-4/5 mb-5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 2.4 }}
      >
        <svgs.s12Text5 className="w-full h-auto" />
      </motion.div>
      {/* <motion.img src={require('./img/s12-img.png')} className='w-2/3' {...animate.downToUp} /> */}
      <div className="flex flex-col items-center space-y-2">
        <div className="flex justify-center space-x-2 w-[10vh] h-[10vh]">
          <motion.img
            src={require("../img/hh.png")}
            
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 0 }}
          />
          <motion.img
            src={require("../img/ap.png")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 0.6 }}
          />
        </div>
        <div className="flex justify-center space-x-2 w-[10vh] h-[10vh]">
          <motion.img
            src={require("../img/mm.webp")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 1.2 }}
          />
          <motion.img
            src={require("../img/ke.webp")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 1.8 }}
          />
          <motion.img
            src={require("../img/mu.webp")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 2.4 }}
          />
        </div>
      </div>
    </div>
  );
}
