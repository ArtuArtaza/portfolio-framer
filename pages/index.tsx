import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/sections/hero/hero";
import Technologies from "@/sections/technologies/technologies";
import Projects from "@/sections/projects/projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col items-center${inter.className}`}>
      <Hero />
      <Technologies />
      <Projects />
    </main>
  );
}
