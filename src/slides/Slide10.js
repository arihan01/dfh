import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S10Img } from "../img/s10-img.svg";

export default function Slide10() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div
        className="font-bvb text-4xl md:text-5xl"
        {...animate.fadeIn}
      >
        Collective
      </motion.div>
      <motion.div
        className="-mt-3 mb-16 font-bvr text-4xl md:text-5xl text-[#E59617]"
        {...animate.fadeIn}
      >
        Collaboration
      </motion.div>
      <motion.div className="w-10/12" {...animate.downToUp}>
        <S10Img className="h-auto w-full" />
      </motion.div>
    </div>
  );
}
