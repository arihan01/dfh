import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide2() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      <motion.div className="mb-16 w-3/4" {...animate.leftToRight}>
        <svgs.s2Text1 className="w-full h-auto" />
      </motion.div>
      {/* <motion.div className='mb-20 w-1/3 mr-12' {...animate.leftToRight}>
            <svgs.s2UL className='w-full h-auto' />
          </motion.div> */}
      <motion.div className="mt-16 w-3/5" {...animate.rightToLeft}>
        <svgs.s2Text2 className="w-full h-auto" />
      </motion.div>
    </div>
  );
}
