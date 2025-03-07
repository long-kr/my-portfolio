// import ProjectCard from "@/components/project/ProjectCard";
import pic from "@/assests/image/Screen (30).jpg";
import Image from "next/image";

const ProjectsPage = () => {
  return (
    <div className="grid grid-cols-1 pb-5 sm:grid-cols-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Image
          key={i}
          src={pic}
          alt="Project Image"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        // <ProjectCard key={i} className="border-none shadow-none" />
      ))}
    </div>
  );
};

export default ProjectsPage;
