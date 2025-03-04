import Image from "next/image";
import React from "react";
import Navigation from "../nav/Navigation";

const navItems = [
  {
    title: "Home",
    link: "./",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const SideBar: React.FC = () => {
  return (
    <div className="h-full">
      <header className="flex justify-center py-12">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={228}
          height={228}
          className="bg-white"
        />
      </header>

      <Navigation navItems={navItems} />
    </div>
  );
};

export default SideBar;
