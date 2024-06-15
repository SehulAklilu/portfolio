import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          fill="white"
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        />
        <Spotlight
          fill="purple"
          className="top-10 left-full h-[80vh] w-[50vw]"
        />
        <Spotlight fill="blue" className="top-28 left-80 h-[80vh] w-[50vw]" />
      </div>

      <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" />
      
    </div>
    <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Web Development with React and Next.js
            </h2>
            <TextGenerateEffect 
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words="I&apos;m a Front-End Developer with React and Next.js Experience."
            />
            <p className="text-center md:tracking-wider text-sm mb-4 md:text-lg lg:text-2xl">
            Hi, I&apos;m Sehul Aklilu. A Front-End Developer from Ethiopia.
            </p>
            <a href="#about">
                <MagicButton
                    title="About Me"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>
    </div>
    </div>
  );
};

export default Hero;
