import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function Slide7() {
  return (
    <div className="flex flex-col items-center justify-center h-full black-bg bg-common">
      {/* <motion.img src={require('./img/s7-img.png')}/> */}
      <TransformWrapper>
        <TransformComponent>
          <motion.img src={require("../img/s7-img.png")} className="mt-10"/>
        </TransformComponent>
      </TransformWrapper>
      <motion.img
        src={require("../img/s7-text.png")}
        className="w-1/3 mt-1"
        {...animate.fadeIn}
      />
      {/* <motion.img
        src={require("../img/s7-text-2.png")}
        className="w-3/5 mt-5"
        {...animate.fadeIn}
      /> */}
      <div className="font-bvb text-white text-2xl lg:text-4xl mt-5">Dancing Frog Habitat</div>
      <div className="font-bvr text-white text-3xl lg:text-5xl -mt-2">Conceptual Layout</div>
      <motion.img
        src={require("../img/s7-lines.png")}
        className="w-4/5 mt-7 mb-5"
        {...animate.downToUp}
      />
      <motion.img
        src={require("../img/s7-icons.png")}
        className="w-4/5"
        {...animate.downToUp}
      />
    </div>
  );
}
