import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as Logo } from "../img/mycelium-text-logo.svg";

import { ReactComponent as S13Ig } from "../img/s13-ig.svg";
import { ReactComponent as S13In } from "../img/s13-in.svg";
import { ReactComponent as S13Yt } from "../img/s13-yt.svg";
import { ReactComponent as S13W } from "../img/s13-w.svg";
import { ReactComponent as S14Logo } from "../img/s14-logo.svg";

export default function Slide1() {
  return (
    <div className="white-bg-2 bg-common flex items-center justify-center">
      <motion.div
        className="flex h-[90vh] w-4/5 flex-col items-center justify-center"
        {...animate.fadeIn}
      >
        <div>
          <p className="w-full text-right font-bvb text-lg text-[#2E663F] md:text-xl">
            Ecology
          </p>
          <p className="font-bvb text-3xl md:text-5xl">
            Explore <span className="text-[#E59617]">Mycelium</span>
          </p>
        </div>
        <Logo className="mx-auto mt-5 h-auto w-3/5" />
        <p className="mt-2 font-cf text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
          veniam tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="mt-2 flex items-center gap-10">
          <a href="https://www.mycelium.today/">
            <S13W className="h-auto w-6" />
          </a>
          <a href="https://www.instagram.com/mycelium.ecology/">
            <S13Ig className="h-auto w-6" />
          </a>
          <a href="https://www.linkedin.com/company/mycelium-ecology/">
            <S13In className="h-auto w-6" />
          </a>
          <a href="https://www.youtube.com/@myceliumlive">
            <S13Yt className="h-auto w-7" />
          </a>
        </div>
        <p className="mt-5 text-center font-bvb text-3xl md:text-5xl">
          Dancing Frog
          <br />
          <span className="font-bvr text-4xl md:text-6xl">Habitat</span>
        </p>
        <p className="mt-2 font-cf text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
          veniam tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="mt-2 flex items-center gap-10">
          <a href="https://www.mycelium.today/dancingfroghabitat">
            <S13W className="h-auto w-6" />
          </a>
          <a href="https://www.instagram.com/dancingfroghabitat/">
            <S13Ig className="h-auto w-6" />
          </a>
          <a href="https://www.youtube.com/playlist?list=PL5OpUZshh2nwKFOAtKzPEmrPGFLsCAldy">
            <S13Yt className="h-auto w-7" />
          </a>
        </div>
        <p className="mt-5 text-center font-bvb text-3xl font-bold md:text-5xl">
          Connecting
          <br />
          <span className="font-bvs text-4xl font-light md:text-6xl">
            the dots
          </span>
        </p>
        <p className="mt-2 font-cf text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim
          veniam tempor incididunt ut labore et dolore magna aliqua. Ut enim a
          minim veniam
        </p>
        <div className="mt-2 flex items-center gap-10">
          <a href="https://www.mycelium.today/">
            <S14Logo className="h-auto w-5" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
