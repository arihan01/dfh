import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S3Text1 } from "../img/s3-img-1.svg";
import { ReactComponent as S3Text2 } from "../img/s3-img-2.svg";

export default function Slide2() {
  return (
    <div className="bg-img-5 bg-common flex h-full items-center justify-center">
      <div className="flex h-[60vh] w-4/5 flex-col items-center justify-between">
        <motion.div {...animate.leftToRight}>
          <S3Text1 className="h-auto w-full" /> {/* First graphic */}
        </motion.div>
        <motion.div {...animate.rightToLeft}>
          <S3Text2 className="h-auto w-full" /> {/* Second graphic */}
        </motion.div>
      </div>
    </div>
  );
}
