import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useStore } from "@/lib/store/useStore";

const Technologies = () => {
  const target = useRef<HTMLDivElement>(null);
  const heroScroll = useStore((store) => store.heroScroll);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["end start", "start end"],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], ["100vh", "auto"]);
  return (
    <motion.section
      ref={target}
      className="bg-darker w-full min-h-screen space-y-6 p-4 pb-5 lg:p-24 text-white flex flex-col text-center lg:flex-row relative z-20"
    >
      <div className="w-full space-y-3 text-left">
        <span className="text-gray">- Experience</span>
        <motion.h3 className="lg:text-2xl text-xl font-semibold">
          Where I have worked.
        </motion.h3>
        <motion.ol className="border-l border-neutral-300 dark:border-neutral-500">
          <motion.li>
            <div className="flex-start flex items-center pt-3">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 animate-pulse"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                Mar 2022 - Nov 2022
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">
                Atrowik (Freelancing).
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                scelerisque diam non nisi semper, et elementum lorem ornare.
                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                sodales vehicula.
              </p>
            </div>
          </motion.li>

          <li>
            <div className="flex-start flex items-center pt-2">
              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                Nov 2022 - Today.
              </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h4 className="mb-1.5 text-xl font-semibold">
                Peninsula Corporation - Fullstack Developer
              </h4>
              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                Libero expedita explicabo eius fugiat quia aspernatur autem
                laudantium error architecto recusandae natus sapiente sit nam
                eaque, consectetur porro molestiae ipsam an deleniti.
              </p>
            </div>
          </li>
        </motion.ol>
      </div>
      <div className="w-full space-y-3 text-left">
        <span className="text-gray">- Technologies</span>
        <h3 className="lg:text-2xl text-xl font-semibold">
          Tech I have been using.
        </h3>
        <div className="flex flex-row space-x-4">
          <ul className="text-neutral-400 space-y-2">
            <li>Typescript</li>
            <li>React</li>
            <li>Tailwind</li>
            <li>NextJS</li>
            <li>ThreeJS</li>
          </ul>
          <ul className="text-neutral-400 space-y-2">
            <li>Express</li>
            <li>Prisma</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Technologies;
