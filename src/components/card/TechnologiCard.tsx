import { IconKeys } from "@/assests/svg";
import { SVGIcon } from "../ui/icon";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

type TechnologiCardProps = {
  title: string;
  icons?: IconKeys[];
};

export const TechnologiCard = ({ title, icons = [] }: TechnologiCardProps) => {
  return (
    <Card className="h-fit gap-5 border-none shadow-none">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent role="ul" className="flex flex-wrap gap-5">
        {icons.map((iconKey) => (
          <li
            key={iconKey}
            className="justify-center-center group flex h-10 w-20"
          >
            <SVGIcon
              iconKey={iconKey}
              svgProps={{ className: "w-10 h-10" }}
              className="self-center group-hover:hidden"
            />

            <CardDescription className="hidden group-hover:inline">
              {iconKey}
            </CardDescription>
          </li>
        ))}
      </CardContent>
    </Card>
  );
};
