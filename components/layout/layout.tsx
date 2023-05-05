import { Inter } from "next/font/google";
import React from "react";
import NavigationBar from "../navigation-bar/navigation-bar";

const inter = Inter({ subsets: ["latin"] });
const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className} overflow-hidden`}
    >
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
