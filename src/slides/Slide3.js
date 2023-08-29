import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide3() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      {/* <motion.div
  className='w-full h-auto animate.rectList'
  variants={animate.rectList}
  initial="initial"
  animate="animate"
> */}
      <motion.div
        className="mb-10 mt-5 w-1/2 mx-auto"
        // variants={animate.rectItem}
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 0 }}
      >
        <svgs.s3Text1 className="w-full h-auto" />
      </motion.div>
      <motion.img
        src={require("../img/s3-img.png")}
        className="mb-10 mx-auto w-2/3"
        // variants={animate.rectItem}
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 0.8 }}
      />
      <motion.div
        className=" w-3/4 mx-auto"
        // variants={animate.rectItem}
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 1.6 }}
      >
        <svgs.s3Text2 className="w-full h-auto" />
      </motion.div>
      {/* </motion.div> */}
    </div>
  );
}
