import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S1Logo } from "../img/s1-logo.svg";
import { ReactComponent as S1Mid } from "../img/s1-mid.svg";
import { ReactComponent as S1Text } from "../img/s1-text.svg";


export default function Slide1() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      <motion.div className="w-4/5" {...animate.downToUp}>
        <S1Logo className="w-full h-auto" />
      </motion.div>
      <motion.div className="w-1/2 mb-32 mt-8" {...animate.downToUp}>
        <S1Mid className="w-full h-auto" />
      </motion.div>
      <motion.div className="w-1/3 mt-32" {...animate.fadeIn}>
        <S1Text className="w-full h-auto" />
      </motion.div>
    </div>
  );
}
