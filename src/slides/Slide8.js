import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";

export default function Slide8() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div className="font-bvb text-4xl md:text-5xl" {...animate.fadeIn}>
        Habitat
      </motion.div>
      <motion.div className="-mt-2 font-bvr text-4xl tracking-tight text-[#E59617] md:text-5xl">
        Residential Plan
      </motion.div>
      <motion.div className="mt-7 flex w-2/3 space-x-16">
        <motion.div {...animate.leftToRight}>
          <img src={require("../img/s8-img-1.png")} alt="img-1" />{" "}
          {/* circle image 1 */}
        </motion.div>
        <motion.div
          {...animate.leftToRight}
          transition={{ ...animate.fadeIn.transition, delay: 0.6 }}
        >
          <img src={require("../img/s8-img-2.png")} alt="img-2" />{" "}
          {/* circle image 2 */}
        </motion.div>
      </motion.div>
      <motion.div
        className="-translate-x-1/5 mb-12 mt-5 text-center font-cf md:text-[2vh] lg:text-[2vh]"
        {...animate.rightToLeft}
      >
        Functional
        <br />
        Weather Proof
        <br />
        Least Intrusive
        <br />
        Maintenance Friendly
      </motion.div>
      <motion.iframe
        className="aspect-video w-full"
        src="https://www.youtube.com/embed/iNVkMcxJ5Sg?autoplay=1&mute=1&loop=1&playlist=iNVkMcxJ5Sg" // youtube video
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        {...animate.fadeIn}
      ></motion.iframe>
    </div>
  );
}
