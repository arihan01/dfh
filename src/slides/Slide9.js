import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S10Img } from "../img/s10-img.svg";

export default function Slide9() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div className="font-bvb text-3xl md:text-4xl" {...animate.fadeIn}>
        Collective
      </motion.div>
      <motion.div
        className="-mt-3 mb-16 font-bvr text-3xl text-[#E59617] md:text-4xl"
        {...animate.fadeIn}
      >
        Advantages
      </motion.div>
      <motion.div className="w-4/5" {...animate.downToUp}>
        <S10Img className="h-auto w-full" /> {/* 3 by 3 grid of icons */}
      </motion.div>
    </div>
  );
}
