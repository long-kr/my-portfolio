import Link from "next/link";

type NavItem = {
  navItems: {
    title: string;
    link: string;
  }[];
};

const Navigation: React.FC<NavItem> = ({ navItems }) => {
  return (
    <nav className="mx-auto w-2/5 text-[#999999]">
      <ul>
        {navItems.map((item) => (
          <li className="mb-5 mt-0" key={item.title}>
            <Link
              className="font-bold hover:font-normal hover:text-[#333333]"
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
