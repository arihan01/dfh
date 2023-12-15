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
      <motion.div className="mt-7 flex w-4/5">
        <p className="text-center font-cf text-sm md:text-base">
          The architectural brilliance within dancing frog habitat is a perfect
          blend of vernacular design and contemporary elements. Each dwelling is
          built on stilts to keep the actual footprint on the ground, less than
          3% and also to ensure safety of the residents.
        </p>
      </motion.div>
      <motion.div
        className="mb-12 mt-5 text-center font-cf text-base font-bold md:text-lg"
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
        className="aspect-video w-full "
        src="https://www.youtube.com/embed/iNVkMcxJ5Sg?autoplay=1&mute=1&loop=1&playlist=iNVkMcxJ5Sg" // youtube video
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        {...animate.fadeIn}
      ></motion.iframe>
    </div>
  );
}
