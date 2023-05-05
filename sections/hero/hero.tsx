import { useStore } from "@/lib/store/useStore";
import { CaretDown, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useParallax } from "@/lib/useParallax";
const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [20, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], ["0", "1"]);
  const y = useParallax(scrollYProgress, -500);
  return (
    <motion.section
      ref={sectionRef}
      style={{ y }}
      className="bg-dark w-full h-screen space-y-2 p-4 lg:p-24 text-white flex flex-col text-center lg:flex-row items-center overflow-hidden relative z-10"
    >
      <div className="w-full flex flex-col items-center space-y-3">
        <h1 className="text-3xl lg:text-5xl font-bold">Arturo Artaza.</h1>
        <motion.img
          style={{ opacity }}
          className="w-1/2 rounded-full"
          src="profile-photo.jpeg"
        />
      </div>
      <div className="w-full space-y-3 text-left">
        <span className="text-gray">- Me</span>
        <motion.h3
          style={{ scale }}
          className="lg:text-2xl text-xl font-semibold relative"
        >
          Software Developer, based in Argentina.
        </motion.h3>
        <p className="text-neutral-400">
          Hello, I am Arturo Ivan Artaza, an advanced system engineering student
          and a JavaScript enthusiast from Argentina. I have been creating web
          solutions since 2020 and am always eager to learn more about this
          fascinating field.
        </p>
      </div>
      <div className="flex space-x-2">
        <Link href="https://github.com/ArtuArtaza/">
          <GithubLogo className="hover:stroke-red-500" size="1.5rem" />
        </Link>
        <Link href="https://www.linkedin.com/in/arturo-iv%C3%A1n-artaza-959a27220/">
          <LinkedinLogo size="1.5rem" />
        </Link>
      </div>
      <div className="relative top-14 animate-bounce">
        <CaretDown size={32} />
      </div>
    </motion.section>
  );
};

export default Hero;
