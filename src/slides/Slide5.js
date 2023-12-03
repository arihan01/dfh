import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";

export default function Slide5() {
  return (
    <div className="white-bg bg-common flex h-full flex-col items-center justify-center">
      <div className="lg:mt-5 font-bvb text-4xl md:text-5xl">Meet The</div>
      <div className="-mt-2 mb-5 font-bvr text-4xl text-[#E59617] md:text-5xl">
        Dancing Frog
      </div>
      <motion.img
        src={require("../img/s5-img.webp")}
        className="mx-auto mb-10 w-1/2 md:w-2/3"
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 0.8 }}
      />
      <motion.div
        className=" w-4/5"
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 1.6 }}
      >
        <div className="text-center font-bvb text-3xl md:text-4xl">
          What’s In A Name?
        </div>
        <div
          className="text-center font-cf text-xl md:text-2xl text-[#E59617] leading-relaxed"
        >
          Micrixalus Kottigeharensis
        </div>
        <div class="flex h-full items-center justify-center">
          <div class="w-auto text-center font-cf text-sm md:text-base leading-relaxed tracking-tight">
            <div>
              Also called torrent frogs & they belong to the genus ‘Micrixalus’.
              Endemic to the Western Ghats of India, these tiny frogs, measuring
              just about three centimeters, are found in and around perennial
              streams.<br/><br/>Of the 24, 14 species have been discovered as recently as
              2014. These are critically endangered, due to loss and
              fragmentation of habitat to agriculture.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
