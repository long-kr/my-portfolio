import { AnimatedText } from "@/components/ui";
import { appData } from "@/config";

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

const ContactSection = dynamic(
  () => import("@/components/section/ContactSection"),
  {
    loading: () => (
      <div className="flex min-h-[50vh] items-center justify-center">
        Loading contact section...
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
            <h1 className="text-2xl font-bold sm:text-4xl md:text-6xl">
              Hi, I&apos;m{" "}
              <AnimatedText
                text={appData.name}
                className="relative inline-block"
                delay={0.1}
              />
            </h1>
          </div>
        </div>
      </section>

      <div id="about" className="mb-24">
        <AboutSection />
      </div>

      <div id="project" className="mb-24 py-16">
        <ProjectsSection />
      </div>

      <div id="contact" className="mb-24 py-16">
        <ContactSection />
      </div>
    </>
  );
}
