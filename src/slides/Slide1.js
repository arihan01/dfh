import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      <motion.div className="w-4/5 mb-36" {...animate.downToUp}>
        <svgs.S1Logo className="w-full h-auto" />
      </motion.div>
      <motion.div className="w-1/3 mt-36" {...animate.fadeIn}>
        <svgs.S1Text className="w-full h-auto" />
      </motion.div>
    </div>
  );
}
