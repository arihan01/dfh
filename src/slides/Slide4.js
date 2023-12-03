import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S4Text1 } from "../img/s4-text-1.svg";
import { ReactComponent as S4Text2 } from "../img/s4-text-2.svg";


export default function Slide4() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div className="mb-16 w-3/4" {...animate.leftToRight}>
        <S4Text1 className="h-auto w-full" />
      </motion.div>
      <motion.div className="mt-16 w-3/5" {...animate.rightToLeft}>
        <S4Text2 className="h-auto w-full" />
      </motion.div>
    </div>
  );
}
