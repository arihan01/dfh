import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Slide7() {
  return (
    <div className="black-bg bg-common flex h-full flex-col items-center justify-center">
      <div className="font-bvb text-4xl text-white md:text-5xl lg:mt-5">
        Dancing Frog Habitat
      </div>
      <div className="-mt-2 font-bvr text-4xl text-[#E59617] md:text-5xl">
        Conceptual Layout
      </div>
      <div className="w-3/4 lg:w-4/5">
        <TransformWrapper>
          <TransformComponent>
            <motion.img src={require("../img/s7-img.webp")} className="mt-10" />{" "}
            {/* Zoomable map */}
          </TransformComponent>
        </TransformWrapper>
      </div>
      <motion.img
        src={require("../img/s7-text.png")} // Pinch to zoom Text
        className="mt-3 w-1/4"
        {...animate.fadeIn}
      />
      <motion.img
        src={require("../img/s7-lines.png")} // route and boundary lines
        className="mb-5 mt-7 w-4/5"
        {...animate.downToUp}
      />
      <motion.img
        src={require("../img/s7-icons.png")} // circle icons
        {...animate.downToUp}
      />
    </div>
  );
}
