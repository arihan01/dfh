import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import * as svgs from "../svgs.js";

export default function Slide4() {
  return (
    <div className="flex flex-col items-center justify-center h-full white-bg bg-common">
      {/* <motion.div
  className='w-full h-auto animate.rectList'
  variants={animate.rectList}
  initial="initial"
  animate="animate"
> */}
      {/* <motion.div
        className="mb-10 mt-5 w-1/2 mx-auto"
        // variants={animate.rectItem}
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 0 }}
      >
        <svgs.s3Text1 className="w-full h-auto" />
      </motion.div> */}
      <div className="font-bvb text-4xl lg:text-5xl">Meet The</div>
      <div className="font-bvr text-4xl lg:text-5xl mb-5 -mt-2">Dancing Frog</div>
      <motion.img
        src={require("../img/s3-img.webp")}
        className="mb-10 mx-auto w-2/3"
        // variants={animate.rectItem}
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 0.8 }}
      />
      <motion.div
        className=" w-4/5 mx-auto"
        // variants={animate.rectItem}
        {...animate.fadeIn}
        transition={{ ...animate.fadeIn.transition, delay: 1.6 }}
      >
        {/* <svgs.s3Text2 className="w-full h-auto" /> */}
        <div className="pb-2">
          <svgs.Temp className="w-full h-auto" />
        </div>
        <div class="flex items-center justify-center h-full">
          <div class="font-cf text-xs lg:text-base tracking-tight leading-5 w-auto ">
            <div>Also called torrent frogs & they belong to the</div>
            <div>genus ‘Micrixalus’. Endemic to the Western</div>
            <div>Ghats of India, these tiny frogs, measuring just</div>
            <div>about three centimeters, are found in and</div>
            <div>around perennial streams. Of the 24, 14 species</div>
            <div>have been discovered as recently as 2014.</div>
            <div>These are critically endangered, due to loss</div>
            <div>and fragmentation of habitat to agriculture.</div>
          </div>
        </div>
      </motion.div>
      {/* </motion.div> */}
    </div>
  );
}
