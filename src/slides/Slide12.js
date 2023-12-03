import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S12Text1 } from "../img/s12-text-1.svg";
import { ReactComponent as S12Text2 } from "../img/s12-text-2.svg";
import { ReactComponent as S12Text3 } from "../img/s12-text-3.svg";
import { ReactComponent as S12Text4 } from "../img/s12-text-4.svg";
import { ReactComponent as S12Text5 } from "../img/s12-text-5.svg";

export default function Slide12() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div className="font-bvb text-4xl md:text-5xl" {...animate.fadeIn}>
        Our
      </motion.div>
      <motion.div
        className="-mt-3 mb-10 font-bvr text-4xl text-[#E59617] md:text-5xl"
        {...animate.fadeIn}
      >
        Partners
      </motion.div>
      <motion.div
        className="mb-5 w-4/5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 0 }}
      >
        <S12Text1 className="h-auto w-full" /> {/* hundred hands text */}
      </motion.div>
      <motion.div
        className="mb-5 w-4/5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 0.6 }}
      >
        <S12Text2 className="h-auto w-full" /> {/* autopilot text */}
      </motion.div>
      <motion.div
        className="mb-5 w-4/5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 1.2 }}
      >
        <S12Text3 className="h-auto w-full" /> {/* chambers text */}
      </motion.div>
      <motion.div
        className="mb-5 w-4/5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 1.8 }}
      >
        <S12Text4 className="h-auto w-full" /> {/* Dr. Tarsh text */}
      </motion.div>
      <motion.div
        className="mb-5 w-4/5"
        {...animate.leftToRight}
        transition={{ ...animate.leftToRight.transition, delay: 2.4 }}
      >
        <S12Text5 className="h-auto w-full" /> {/* Nachi text */}
      </motion.div>
      <div className="flex flex-col items-center space-y-2">
        <div className="flex h-[10vh] w-[10vh] justify-center space-x-2">
          <motion.img // the 5 images on the slide from left to right
            src={require("../img/hh.png")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 0 }}
          />
          <motion.img
            src={require("../img/ap.png")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 0.6 }}
          />
        </div>
        <div className="flex h-[10vh] w-[10vh] justify-center space-x-2">
          <motion.img
            src={require("../img/mm.webp")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 1.2 }}
          />
          <motion.img
            src={require("../img/ke.webp")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 1.8 }}
          />
          <motion.img
            src={require("../img/mu.webp")}
            {...animate.leftToRight}
            transition={{ ...animate.leftToRight.transition, delay: 2.4 }}
          />
        </div>
      </div>
    </div>
  );
}
