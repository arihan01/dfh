import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
// import * as svgs from "../svgs.js";

export default function Slide6() {
  return (
    <div className="flex flex-col items-center justify-center h-screen white-bg bg-common">
      {/* <motion.img src={require('./img/s9-top.png')} className='w-4/5 mb-5' {...animate.fadeIn} /> */}
      {/* <motion.img src={require('./img/s9-img-1.png')} className='w-3/4 mt-5' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0 }} />
    <motion.img src={require('./img/s9-img-2.png')} className='w-3/4' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0.6 }} />
    <motion.img src={require('./img/s9-img-3.png')} className='w-3/4' {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 1.2 }} /> */}
      {/* <motion.div className='w-2/3 mb-1 mt-5' {...animate.fadeIn}>
      <svgs.s10Top className='w-full h-auto' />
    </motion.div> */}
      {/* <motion.div className='w-2/3 mb-4' {...animate.fadeIn}>
      <svgs.s2UL className='w-full h-auto' />
    </motion.div> */}
      <motion.div
        className="font-bvb text-4xl lg:text-[4vh] md:text-5xl mt-10"
        {...animate.fadeIn}
      >
        The Habitat
      </motion.div>
      <motion.div
        className="font-bvr text-4xl lg:text-[5vh] md:text-6xl mb-5 -mt-3"
        {...animate.fadeIn}
      >
        Ecosystem
      </motion.div>
      <motion.div
        className="flex items-center justify-center w-1/5 space-x-7 mb-5"
        {...animate.upToDown}
      >
        <img src={require("../img/s6-img-1.png")} alt="s6-img-1" />
        <img src={require("../img/s6-img-2.png")} alt="s6-img-2" />
        <img src={require("../img/s6-img-3.png")} alt="s6-img-3" />
      </motion.div>
      <motion.div
        className="font-cf text-xs lg:text-[1.5vh] md:text-[1.5vh]  mb-60 text-center leading-[1.8vh]"
        {...animate.rightToLeft}
      >
        At Dancing Frog Habitat, experience the magic
        <br />
        of our unique shola grasslands, home to
        <br />
        seasonal Neela Kurunji flowers and framed by
        <br />
        the majestic Kumara Parvatha. Trek through
        <br />
        our ancient forest, where 300-year-old trees
        <br />
        whisper tales, and a vibrant tapestry of
        <br />
        endemic birds, orchids, butterflies, and rare
        <br />
        fungi await. Let the melody of our perennial
        <br />
        stream, teeming with life in its purest waters,
        <br />
        be your guide in this sensory-rich journey.
        <br />
        Dive into nature's embrace like never before.
      </motion.div>
      <div className="w-full h-1/3 bottom-0 absolute">
        <img src={require("../img/s11-img.webp")} alt="s6-img-4" />
      </div>
      {/* <motion.img src={require('../img/s10-img-1.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0 }} className='mb-3' />
    <motion.img src={require('../img/s10-img-2.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 0.6 }} className='mb-3' />
    <motion.img src={require('../img/s10-img-3.png')} {...animate.downToUp} transition={{ ...animate.downToUp.transition, delay: 1.2 }} /> */}
    </div>
  );
}
