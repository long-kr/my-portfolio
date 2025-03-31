import navItems from "@/data/navItems";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  return (
    <ul className={cn(className)}>
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
  );
};

export default Navigation;
