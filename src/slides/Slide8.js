import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
// import * as svgs from "../svgs.js";

export default function Slide8() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      {/* <motion.div className='w-3/4 mb-5' {...animate.fadeIn}>
  <svgs.s6Top className='w-full h-auto' />
</motion.div>
<motion.img src={require('./img/s6-img.png')} className='w-4/5 rounded-lg mt-5 mb-5' {...animate.fadeIn} />
<motion.img src={require('./img/s6-text.png')} className='w-full mt-5 px-5' {...animate.fadeIn} /> */}
      {/* <motion.div
        className="w-1/2 absolute top-28 mr-32"
        {...animate.leftToRight}
      >
        <svgs.s6Text className="w-full h-auto" />
      </motion.div> */}
      <motion.div className="font-bvb text-4xl lg:text-[5vh] md:text-5xl" {...animate.fadeIn}>
        Habitat
      </motion.div>
      <motion.div
        className="font-bvr text-4xl lg:text-[5vh] md:text-5xl tracking-tight -mt-2"
        {...animate.fadeIn}
      >
        Residential Plan
      </motion.div>
      <motion.div className="flex w-2/3 space-x-16 mt-7">
        <motion.div {...animate.leftToRight}>
          <img src={require("../img/s8-img-1.png")} alt="img-1" />
        </motion.div>
        <motion.div
          {...animate.leftToRight}
          transition={{ ...animate.fadeIn.transition, delay: 0.6 }}
        >
          <img src={require("../img/s8-img-2.png")} alt="img-2" />
        </motion.div>
      </motion.div>
      <motion.div
        className="font-cf lg:text-[2vh] md:text-xl -translate-x-1/5 mt-7 mb-20 text-center"
        {...animate.rightToLeft}
      >
        Functional
        <br />
        Weather Proof
        <br />
        Least Intrusive
        <br />
        Maintenance Friendly
      </motion.div>
      <motion.iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/iNVkMcxJ5Sg?autoplay=1&mute=1&loop=1&playlist=iNVkMcxJ5Sg"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        {...animate.fadeIn}
      ></motion.iframe>
    </div>
  );
}
