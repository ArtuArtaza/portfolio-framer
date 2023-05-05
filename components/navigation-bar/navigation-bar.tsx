import { List } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
const NavigationBar = () => {
  const menuVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
    },
  };
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="w-full bg-dark text-white sticky z-50">
      <button
        onClick={() => setMenuOpen(!isMenuOpen)}
        className="p-2 md:hidden hover:scale-110"
      >
        <List size="2rem" />
      </button>
      <motion.div
        initial="hidden"
        variants={menuVariants}
        animate={isMenuOpen ? "visible" : "hidden"}
        className="p-2 w-full h-screen text-white flex flex-col absolute bg-red-500"
      >
        <Link href="">Me</Link>
        <Link href="">Portfolio</Link>
        <Link href="">Blog</Link>
        <Link href="">Contact</Link>
      </motion.div>
    </nav>
  );
};

export default NavigationBar;
