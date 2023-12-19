import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";

export default function Slide5() {
  return (
    <div className="white-bg bg-common flex h-screen flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-center mt-[7vh] lg:mt-[6vh]">
        <motion.div
          className="font-bvb text-3xl md:text-4xl lg:mt-5"
          {...animate.fadeIn}
        >
          The Habitat {/* Header */}
        </motion.div>
        <motion.div
          className="-mt-3 mb-5 font-bvr text-3xl text-[#E59617] md:text-4xl"
          {...animate.fadeIn}
        >
          Ecosystem
        </motion.div>
        <motion.div
          className="mb-5 flex w-1/5 items-center justify-center gap-7"
          {...animate.upToDown}
        >
          <img src={require("../img/s6-img-1.png")} alt="s6-img-1" />{" "}
          {/* circle icons */}
          <img src={require("../img/s6-img-2.png")} alt="s6-img-2" />
          <img src={require("../img/s6-img-3.png")} alt="s6-img-3" />
        </motion.div>
        <motion.div
          className="w-4/5 text-center font-cf text-xs md:text-sm"
          {...animate.rightToLeft}
        >
          At Dancing Frog Habitat, experience the magic of our unique shola
          grasslands, home to seasonal Neela Kurunji flowers and framed by the
          majestic Kumara Parvatha.
          <br />
          <br /> Trek through our ancient forest, where 300-year-old trees
          whisper tales, and a vibrant tapestry of endemic birds, orchids,
          butterflies, and rare fungi await. <br />
          <br />
          Let the melody of our perennial stream, teeming with life in its
          purest waters, be your guide in this sensory-rich journey. Dive into
          nature's embrace like never before.
        </motion.div>
      </div>
      <div className="absolute bottom-0">
        <img
          src={require("../img/s6-img.webp")} // bottom image
          alt="s6-img-4"
          className="aspect-[17/9] w-full"
        />
      </div>
    </div>
  );
}
