import { ProjectCard } from "@/components/card";

const ProjectsPage = () => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="col-span-2 md:col-span-1">
          <ProjectCard className="border-none shadow-none" />
        </div>
      ))}
    </>
  );
};

export default ProjectsPage;
