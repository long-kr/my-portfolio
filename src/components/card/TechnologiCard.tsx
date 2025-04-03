import { IconKeys } from "@/assests/svg";
import { toTitleCase } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, SVGIcon } from "../ui";

type TechnologiCardProps = {
  title: string;
  icons?: IconKeys[];
};

export const TechnologiCard = ({ title, icons = [] }: TechnologiCardProps) => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>{toTitleCase(title)}</CardTitle>
      </CardHeader>

      <CardContent role="ul" className="flex list-none flex-wrap gap-5">
        {icons.map((iconKey) => (
          <li key={iconKey}>
            <SVGIcon
              iconKey={iconKey}
              svgProps={{ className: "w-10 h-10" }}
              className="self-center"
            />
          </li>
        ))}
      </CardContent>
    </Card>
  );
};

TechnologiCard.displayName = "TechnologiCard";
