import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide11() {
  return (
    <div className="flex flex-col items-center justify-center h-full blue-bg bg-common">
      <motion.div className="w-1/2 mb-10 mt-auto" {...animate.leftToRight}>
        <svgs.s11Top className="w-full h-auto" />
      </motion.div>
      <motion.div className="w-3/4 mt-10 mb-auto" {...animate.downToUp}>
        <svgs.s11Img className="w-full h-auto" />
      </motion.div>
    </div>
  );
}
