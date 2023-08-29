import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide5() {
  return (
    <div className="flex flex-col items-center justify-center h-full black-bg bg-img-5 bg-common">
      {/* <motion.img src={require('./img/s5-img-1.png')} className='w-3/4 mb-20' {...animate.fadeIn} />
<motion.img src={require('./img/s5-img-2.png')} className='w-3/4 mt-20' {...animate.fadeIn} /> */}
      <motion.div className="w-4/5 mb-16" {...animate.leftToRight}>
        <svgs.s5Text1 className="w-full h-auto" />
      </motion.div>
      <motion.div className="w-4/5" {...animate.rightToLeft}>
        <svgs.s5Text2 className="w-full h-auto" />
      </motion.div>
    </div>
  );
}
