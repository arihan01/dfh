import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S1Logo } from "../img/s1-logo.svg";
import { ReactComponent as S1Mid } from "../img/s1-mid.svg";
import { ReactComponent as S1Text } from "../img/s1-text.svg";

export default function Slide1() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div className="w-4/5" {...animate.downToUp}>
        <S1Logo className="h-auto w-full" /> {/* Logo Image */}
      </motion.div>
      <motion.div className="mb-32 mt-8 w-1/2" {...animate.downToUp}>
        <S1Mid className="h-auto w-full" /> {/* Middle Image */}
      </motion.div>
      <motion.div className="mt-32 w-1/3" {...animate.fadeIn}>
        <S1Text className="h-auto w-full" /> {/* Text */}
      </motion.div>
    </div>
  );
}
