import Image from "next/image";
import React from "react";

const navItems = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
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
    <div className="h-full text-[#999999] text-center">
      <header className="py-12 flex justify-center">
        <Image
          src="/avatar.jpg"
          alt="avatar"
          width={228}
          height={228}
          className=" bg-black"
        />
      </header>

      <nav>
        <ul>
          {navItems.map((item) => (
            <li className="mb-2" key={item.title}>
              <a className="hover:text-[#333333]" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
