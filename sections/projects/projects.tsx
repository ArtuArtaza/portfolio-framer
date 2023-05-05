import { useStore } from "@/lib/store/useStore";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useParallax } from "@/lib/useParallax";
import Card from "@/components/card/card";

const Projects = () => {
  const target = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start end", "end start"],
  });
  //const y = useTransform(scrollYProgress, [0, 0.5], ["100vh", "auto"]);
  const y = useParallax(scrollYProgress, 300);
  return (
    <motion.section
      ref={target}
      style={{ y }}
      className="bg-dark w-full h-screen space-y-6 p-4 lg:p-24 text-white flex flex-col text-center lg:flex-row relative"
    >
      <div className="w-full space-y-3 text-left">
        <span className="text-gray">- Projects</span>
        <motion.h3 className="lg:text-2xl text-xl font-semibold">
          Some projects.
        </motion.h3>
        <div className="relative items-center w-full  mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-2 gap-6 mx-auto lg:grid-cols-3">
            <Card
              title="Monopoly"
              subtitle="A Monopoly Copy made with ThreeJS and WebSockets"
              link="Read More"
              img=""
            />
            <Card
              title="Todo app based in Trello"
              subtitle="A Todo app made with NextJS and Tailwind"
              link="Read More"
              img=""
            />
            <Card
              title="Monopoly"
              subtitle="A Monopoly Copy made with ThreeJS and WebSockets"
              link="Read More"
              img=""
            />
            <Card
              title="Monopoly"
              subtitle="A Monopoly Copy made with ThreeJS and WebSockets"
              link="Read More"
              img=""
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Projects;
