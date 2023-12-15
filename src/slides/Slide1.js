import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S1Logo } from "../img/s1-logo.svg";
import { ReactComponent as S1Text } from "../img/s1-text.svg";

export default function Slide1() {
  return (
    <div className="bg-img-1 bg-common flex items-center justify-center">
      <div className="flex h-4/5 w-full flex-col items-center justify-between">
        <motion.div className="w-full" {...animate.downToUp}>
          <S1Logo className="h-auto w-full" /> {/* Logo Image */}
        </motion.div>
        <motion.div className="mt-32 w-1/3" {...animate.fadeIn}>
          <S1Text className="h-auto w-full" /> {/* Text */}
        </motion.div>
      </div>
    </div>
  );
}
