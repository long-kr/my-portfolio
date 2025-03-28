import { ProjectCard } from "@/components/card";

const ProjectsPage = () => {
  return (
    <div className="grid grid-cols-1 pb-5 sm:grid-cols-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <ProjectCard key={i} title="test" description="test" />
      ))}
    </div>
  );
};

export default ProjectsPage;
