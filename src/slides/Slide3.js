import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S3Text1 } from "../img/s3-img-1.svg"
import { ReactComponent as S3Text2 } from "../img/s3-img-2.svg"

export default function Slide3() {
  return (
    <div className="black-bg bg-img-5 bg-common flex h-full flex-col items-center justify-center">
      <motion.div className="mb-16 mt-10 w-4/5" {...animate.leftToRight}>
        <S3Text1 className="h-auto w-full" />
      </motion.div>
      <motion.div className="mt-20 w-4/5" {...animate.rightToLeft}>
        <S3Text2 className="h-auto w-full" />
      </motion.div>
    </div>
  );
}
