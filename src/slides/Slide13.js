import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S13Q } from "../img/s13-quote.svg";
import { ReactComponent as S13Text } from "../img/s13-text.svg";
import { ReactComponent as S13C } from "../img/s13-contact.svg";
import { ReactComponent as S13Ig } from "../img/s13-ig.svg";
import { ReactComponent as S13In } from "../img/s13-in.svg";
import { ReactComponent as S13Yt } from "../img/s13-yt.svg";
import { ReactComponent as S13W } from "../img/s13-w.svg";

export default function Slide13() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div className="mt-28 w-4/5" {...animate.rightToLeft}>
        <S13Q className="h-auto w-full" />
      </motion.div>
      <motion.img
        src={require("../img/s13-img.png")}
        className="w-1/2"
        {...animate.fadeIn}
      />
      <motion.div className="mt-5 w-2/3" {...animate.fadeIn}>
        <S13Text className="h-auto w-full" />
      </motion.div>
      <motion.div className="mt-auto w-1/2" {...animate.downToUp}>
        <S13C className="h-auto w-full" />
      </motion.div>
      <div className="mt-auto flex items-center justify-center space-x-5 pb-10">
        <a
          href="https://www.instagram.com/dancingfroghabitat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div>
            <S13Ig className="h-5 w-5" />
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/company/mycelium-ecology/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div>
            <S13In className="h-5 w-5" />
          </motion.div>
        </a>
        <a
          href="https://www.youtube.com/playlist?list=PL5OpUZshh2nwKFOAtKzPEmrPGFLsCAldy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div>
            <S13Yt className="h-7 w-7" />
          </motion.div>
        </a>
        <a
          href="https://www.mycelium.today/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div>
            <S13W className="h-5 w-5" />
          </motion.div>
        </a>
      </div>
    </div>
  );
}
