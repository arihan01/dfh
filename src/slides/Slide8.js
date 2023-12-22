import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";

export default function Slide8() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div className="font-bvb text-3xl md:text-4xl" {...animate.fadeIn}>
        Collective
      </motion.div>
      <motion.div
        className="-mt-3 mb-8 font-bvr text-3xl text-[#E59617] md:text-4xl"
        {...animate.fadeIn}
      >
        Sustainability
      </motion.div>
      {/* <motion.div
        className="font-cf text-sm lg:text-[1.7vh] md:text-xl mb-8 lg:mb-10 "
        {...animate.fadeIn}
      >
        Harmonious Coexistence
      </motion.div> */}
      <motion.div className="mb-8 w-4/5" {...animate.rightToLeft}>
        <div className="font-bvs text-xl md:text-3xl lg:text-2xl xl:text-3xl">
          CANOPY WALK AND
          <br />
          INTERPRETATION CENTRE
        </div>
        <div className="font-cf text-sm leading-[2.25vh] md:text-base lg:text-sm xl:text-base">
          <span style={{ color: "#E59617" }}>Camera traps</span> in strategic
          locations,
          <br />
          designing a platform that allows access
          <br />
          to <span style={{ color: "#E59617" }}>200+ years old canopy</span> 40
          ft above the
          <br />
          ground, coupled with an interpretation
          <br />
          center, arena and a laboratory.
        </div>
      </motion.div>
      <motion.div
        className="right-align mb-8 ml-2 w-4/5"
        {...animate.leftToRight}
      >
        <div className="text-right font-bvs text-xl md:text-3xl lg:text-2xl xl:text-3xl">
          NATIVE FOREST
          <br />
          PRODUCE
        </div>
        <div className="text-right font-cf text-sm leading-[2.25vh] md:text-base lg:text-sm xl:text-base">
          Western Ghats hosts over{" "}
          <span style={{ color: "#E59617" }}>9000 species</span>
          <br />
          of plants. Our team at Dancing Frog
          <br />
          is in the process of cataloguing the
          <br />
          medicinal plants
        </div>
      </motion.div>
      <motion.div className="left-align mr-3 w-4/5" {...animate.rightToLeft}>
        <div className="font-bvs text-xl md:text-3xl lg:text-2xl xl:text-3xl">
          EXPERIENCES
        </div>
        <div className="font-cf text-sm leading-[2.25vh] md:text-base lg:text-sm xl:text-base">
          Forest experiences or the viewing
          <br />
          of forest scenes contributes to
          <br />
          <span style={{ color: "#E59617" }}>
            reducing stress, promoting positive
          </span>
          <br />
          <span style={{ color: "#E59617" }}>feelings</span> resulting in
          general wellness.
          <br />
          Hiking, camping, wildlife watching,
          <br />
          tree climbing, foraging or just
          <br />
          meditating are some examples.
        </div>
      </motion.div>
    </div>
  );
}
