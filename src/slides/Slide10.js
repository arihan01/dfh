import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide10() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      {/* <motion.div className="w-1/2 mb-10 mt-auto" {...animate.leftToRight}>
        <svgs.s11Top className="w-full h-auto" />
      </motion.div> */}
      <motion.div className="font-bvb text-5xl lg:text-5xl" {...animate.fadeIn}>
        Collective
      </motion.div>
      <motion.div
        className="font-bvr text-5xl lg:text-5xl -mt-3 mb-16"
        {...animate.fadeIn}
      >
        Framework
      </motion.div>
      <motion.div className="w-10/12" {...animate.downToUp}>
        <svgs.s11Img className="w-full h-auto" />
      </motion.div>
    </div>
  );
}
