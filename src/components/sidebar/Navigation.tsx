import Link from "next/link";

type NavItem = {
  navItems: Array<{
    title: string;
    link: string;
  }>;
};

const Navigation: React.FC<NavItem> = ({ navItems }) => {
  return (
    <nav className="mx-auto w-2/5">
      <ul>
        {navItems.map((item) => (
          <li className="pb-5 pt-0" key={item.title}>
            <Link
              className="font-bold hover:font-normal hover:text-secondary"
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
