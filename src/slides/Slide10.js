import React from "react";
import { motion } from "framer-motion";
import * as animate from "../animations";
import { ReactComponent as S11Arrow } from "../img/s11-arrow.svg";

export default function Slide10() {
  // const [imageStates, setImageStates] = useState([true, true, true, true]);

  // const toggleImage = (index) => {
  //   const newImageStates = [...imageStates];
  //   newImageStates[index] = !newImageStates[index];
  //   setImageStates(newImageStates);
  // };
  return (
    <div className="white-bg bg-common flex h-full items-center justify-center">
      {/* <motion.div
        className="font-bvb text-4xl leading-[5vh] md:mt-16 md:text-5xl "
        {...animate.fadeIn}
      >
        Project
      </motion.div>
      <motion.div
        className="-mt-3 font-bvr text-4xl leading-[5vh] text-white md:text-5xl lg:text-[4vh]"
        {...animate.fadeIn}
      >
        Milestones
      </motion.div>

      <motion.div
        className="mb-5 mt-5 font-cf text-sm md:mt-0 md:text-lg"
        {...animate.fadeIn}
      >
        Tap to Uncover Milestone Details
      </motion.div>

      <motion.div // year and info main container
        className="w-2/3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 0 }}
      >
        {imageStates[0] ? (
          <motion.img // year 2023
            src={require("../img/s11-2023.png")}
            className="image-button mx-auto mb-1 w-2/5"
            onClick={() => toggleImage(0)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="mb-3 mt-5 w-full" // 2023 milestones text
            onClick={() => toggleImage(0)}
            {...animate.fadeIn}
          >
            <S11Text1 className="my-1 h-auto w-full" />
          </motion.div>
        )}
      </motion.div>

      <motion.div // year and info main container
        className="mt-3 w-2/3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 0.8 }}
      >
        {imageStates[1] ? (
          <motion.img // year 2024
            src={require("../img/s11-2024.png")}
            className="image-button mx-auto mb-1 w-2/5"
            onClick={() => toggleImage(1)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="mb-3 w-full" // 2024 milestones text
            onClick={() => toggleImage(1)}
            {...animate.fadeIn}
          >
            <S11Text2 className="my-1 h-auto w-full" />
          </motion.div>
        )}
      </motion.div>

      <motion.div // year and info main container
        className="mt-3 w-2/3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 1.6 }}
      >
        {imageStates[2] ? (
          <motion.img // year 2025
            src={require("../img/s11-2025.png")}
            className="image-button mx-auto mb-1 w-2/5"
            onClick={() => toggleImage(2)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="mb-3 w-full" // 2025 milestones text
            onClick={() => toggleImage(2)}
            {...animate.fadeIn}
          >
            <S11Text3 className="my-1 h-auto w-full" />
          </motion.div>
        )}
      </motion.div>

      <motion.div // year and info main container
        className="mt-3 w-2/3"
        {...animate.upToDown}
        transition={{ ...animate.upToDown.transition, delay: 2.4 }}
      >
        {imageStates[3] ? (
          <motion.img // year 2026
            src={require("../img/s11-2026.png")}
            className="image-button mx-auto mb-1 w-2/5"
            onClick={() => toggleImage(3)}
            {...animate.fadeIn}
          />
        ) : (
          <motion.div
            className="w-full" // 2026 milestones text
            onClick={() => toggleImage(3)}
            {...animate.fadeIn}
          >
            <S11Text4 className="my-1 h-auto w-full" />
          </motion.div>
        )}
      </motion.div> */}

      <div className="flex h-4/5 flex-col justify-between md:gap-10 lg:gap-0 xl:gap-10">
        <motion.div {...animate.fadeIn}>
          <p className="text-center font-bvb text-3xl md:text-4xl lg:text-3xl xl:text-4xl">
            Collective
          </p>
          <p className="-mt-2 text-center font-bvr text-3xl text-[#A83D35] md:text-4xl lg:text-3xl xl:text-4xl">
            Testimonials
          </p>
        </motion.div>

        <motion.div {...animate.leftToRight}>
          <div className=" mx-auto flex w-4/5 items-center justify-center gap-2">
            <img
              src={require("../img/s11-img-1.webp")}
              alt="s11 img 1"
              className="h-2/5 w-2/5"
            />
            <div className="flex w-4/5 flex-col justify-center">
              <p className="font-bvb text-xl md:text-3xl lg:text-xl xl:text-2xl">
                Deepthi Tanikella
              </p>
              <p className="font-cf text-xs">
                Hear Deepthi Tanikella share her reasons for joining our
                collective and delve into its essence. See her whole story on
                our youtube channel.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <S11Arrow className="h-4 w-4" />
                <a
                  href="https://www.youtube.com/watch?v=XbkA1gxE6Lk"
                  className="rounded-full bg-[#A83D35] p-2 px-5 text-center font-cf text-xs text-white"
                >
                  Watch here
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div {...animate.rightToLeft}>
          <div className="mx-auto flex w-4/5 items-center justify-center gap-2">
            <div className="flex w-4/5 flex-col justify-center">
              <p className="font-bvb text-xl md:text-3xl lg:text-xl xl:text-2xl">
                Vinod Chandramouli
              </p>
              <p className="font-cf text-xs">
                As the pioneering member of our collective, Vinod Chandramouli's
                desire to find a natural sanctuary for his family has been our
                guiding inspiration since the beginning.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <S11Arrow className="h-4 w-4" />
                <a
                  href="https://www.youtube.com/watch?v=XbkA1gxE6Lk"
                  className="rounded-full bg-[#A83D35] p-2 px-5 text-center font-cf text-xs text-white"
                >
                  Watch here
                </a>
              </div>
            </div>
            <img
              src={require("../img/s11-img-2.webp")}
              alt="s11 img 1"
              className="h-2/5 w-2/5"
            />
          </div>
        </motion.div>

        <motion.div {...animate.leftToRight}>
          <div className="mx-auto flex w-4/5 items-center justify-center gap-2">
            <img
              src={require("../img/s11-img-3.webp")}
              alt="s11 img 1"
              className="h-2/5 w-2/5"
            />
            <div className="flex w-4/5 flex-col justify-center">
              <p className="font-bvb text-xl md:text-3xl lg:text-xl xl:text-2xl">
                Bala Parthasarathy
              </p>
              <p className="font-cf text-xs">
                From the boardroom to the great outdoors, Bala Parthasarathy is
                a testament to the balance between professional excellence and
                environmental stewardship.
              </p>
              <div className="mt-2 flex items-center gap-2">
                <S11Arrow className="h-4 w-4" />
                <a
                  href="https://youtu.be/tIa-gPe-dA8?feature=shared "
                  className="rounded-full bg-[#A83D35] p-2 px-5 text-center font-cf text-xs text-white"
                >
                  Watch here
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
