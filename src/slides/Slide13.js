import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide13() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      <motion.div className="w-4/5 mt-20" {...animate.rightToLeft}>
        <svgs.s13Q className="w-full h-auto" />
      </motion.div>
      {/* <motion.a href="https://www.mycelium.today/" target="_blank" rel="noopener noreferrer" className='w-2/3 mt-auto image-button' {...animate.fadeIn}>
      <img src={require('./img/s13-btn.png')} />
    </motion.a> */}
      {/* <motion.div className='w-3/4 mt-5' {...animate.downToUp}>
      <svgs.s11Text2 className='w-full h-auto' />
    </motion.div> */}
      <motion.img
        src={require("../img/s13-img.png")}
        className="w-1/2"
        {...animate.fadeIn}
      />
      <motion.div className="w-2/3 mt-5" {...animate.fadeIn}>
        <svgs.s13Text className="w-full h-auto" />
      </motion.div>
      <motion.div className="w-1/2 mt-auto" {...animate.downToUp}>
        <svgs.s13C className="w-full h-auto" />
      </motion.div>
      <div className="flex justify-center items-center space-x-5 pb-10 mt-auto">
        <a
          href="https://www.instagram.com/dancingfroghabitat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div>
            <svgs.s13Ig className="w-5 h-5" />
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/company/mycelium-ecology/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div>
            <svgs.s13In className="w-5 h-5" />
          </motion.div>
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL5OpUZshh2nwKFOAtKzPEmrPGFLsCAldy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div>
            <svgs.s13Yt className="w-7 h-7" />
          </motion.div>
        </a>
        <a
          href="https://www.mycelium.today/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div>
            <svgs.s13W className="w-5 h-5" />
          </motion.div>
        </a>
      </div>
    </div>
  );
}
