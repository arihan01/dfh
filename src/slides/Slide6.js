import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide6() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-img-6 bg-common">
      {/* <motion.div className='w-3/4 mb-5' {...animate.fadeIn}>
  <svgs.s6Top className='w-full h-auto' />
</motion.div>
<motion.img src={require('./img/s6-img.png')} className='w-4/5 rounded-lg mt-5 mb-5' {...animate.fadeIn} />
<motion.img src={require('./img/s6-text.png')} className='w-full mt-5 px-5' {...animate.fadeIn} /> */}
      <motion.div
        className="w-1/2 absolute top-28 mr-32"
        {...animate.leftToRight}
      >
        <svgs.s6Text className="w-full h-auto" />
      </motion.div>
    </div>
  );
}
