import { AnimatedCircle, AnimatedText } from "@/components/ui";
import { appData } from "@/data";
import dynamic from "next/dynamic";

// Lazy load the sections using Next.js dynamic import
const AboutSection = dynamic(
  () => import("@/components/section/AboutSection"),
  {
    loading: () => (
      <div className="flex min-h-[50vh] items-center justify-center">
        Loading about section...
      </div>
    ),
  },
);

const ProjectsSection = dynamic(
  () => import("@/components/section/ProjectsSection"),
  {
    loading: () => (
      <div className="flex min-h-[50vh] items-center justify-center">
        Loading projects...
      </div>
    ),
  },
);

export default function Home() {
  return (
    <>
      <section className="relative min-h-[75vh] md:min-h-[100vh]">
        <div className="sticky top-0 flex h-[75vh] items-center justify-center md:h-screen">
          <div className="relative">
            <h1 className="h- text-2xl font-bold sm:text-4xl md:text-6xl">
              Hi, I&apos;m{" "}
              <AnimatedText
                text={appData.name}
                className="relative inline-block"
                delay={0.1}
              />
            </h1>

            <AnimatedCircle containerClassName="absolute -right-3 sm:-right-2 sm:-top-9 md:-right-0 -top-7 h-24 w-24 md:-top-14 sm:h-32 md:h-48 sm:w-32 md:w-48" />
          </div>
        </div>
      </section>

      <div className="mb-24">
        <AboutSection />
      </div>

      <div className="mb-24 py-16">
        <ProjectsSection />
      </div>
    </>
  );
}
