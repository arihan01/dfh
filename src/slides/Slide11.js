import React, { useState } from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S11Text1 } from "../img/s11-text-1.svg";
import { ReactComponent as S11Text2 } from "../img/s11-text-2.svg";
import { ReactComponent as S11Text3 } from "../img/s11-text-3.svg";
import { ReactComponent as S11Text4 } from "../img/s11-text-4.svg";

export default function Slide11() {
  const [imageStates, setImageStates] = useState([true, true, true, true]);

  const toggleImage = (index) => {
    const newImageStates = [...imageStates];
    newImageStates[index] = !newImageStates[index];
    setImageStates(newImageStates);
  };
  return (
    <div className="orange-bg bg-common flex h-full flex-col items-center justify-center">
      <motion.div
        className="md:mt-16 font-bvb text-4xl leading-[5vh] md:text-5xl "
        {...animate.fadeIn}
      >
        Project
      </motion.div>
      <motion.div
        className="-mt-3 font-bvr text-4xl leading-[5vh] md:text-5xl lg:text-[4vh] text-white"
        {...animate.fadeIn}
      >
        Milestones
      </motion.div>

      <motion.div
        className="mb-5 mt-5 md:mt-0 font-cf text-sm md:text-lg"
        {...animate.fadeIn}
      >
        Tap to Uncover Milestone Details
      </motion.div>

      <motion.div
        className="w-2/3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 0 }}
      >
        {imageStates[0] ? (
          <motion.img //year
            src={require("../img/s11-2023.png")}
            className="image-button mx-auto mb-1 w-2/5"
            onClick={() => toggleImage(0)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="mb-3 mt-5 w-full" //text
            onClick={() => toggleImage(0)}
            {...animate.fadeIn}
          >
            <S11Text1 className="my-1 h-auto w-full" />
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="mt-3 w-2/3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 0.8 }}
      >
        {imageStates[1] ? (
          <motion.img //year
            src={require("../img/s11-2024.png")}
            className="image-button mx-auto mb-1 w-2/5"
            onClick={() => toggleImage(1)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="mb-3 w-full" //text
            onClick={() => toggleImage(1)}
            {...animate.fadeIn}
          >
            <S11Text2 className="my-1 h-auto w-full" />
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="mt-3 w-2/3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 1.6 }}
      >
        {imageStates[2] ? (
          <motion.img //year
            src={require("../img/s11-2025.png")}
            className="image-button mx-auto mb-1 w-2/5"
            onClick={() => toggleImage(2)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="mb-3 w-full" //text
            onClick={() => toggleImage(2)}
            {...animate.fadeIn}
          >
            <S11Text3 className="my-1 h-auto w-full" />
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="mt-3 w-2/3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 2.4 }}
      >
        {imageStates[3] ? (
          <motion.img //year
            src={require("../img/s11-2026.png")}
            className="image-button mx-auto mb-1 w-2/5"
            onClick={() => toggleImage(3)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="w-full" //text
            onClick={() => toggleImage(3)}
            {...animate.fadeIn}
          >
            <S11Text4 className="my-1 h-auto w-full" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
