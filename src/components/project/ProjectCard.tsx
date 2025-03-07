import pic from "@/assests/image/Screen (30).jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProjectCardProps = React.ComponentProps<typeof Card>;

const ProjectCard: React.FC<ProjectCardProps> = ({ className, ...props }) => {
  return (
    <Card className={cn(className)} {...props}>
      <CardContent className="px-0">
        <Image
          src={pic}
          alt="Project Image"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </CardContent>
      <CardFooter className="flex-col">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
