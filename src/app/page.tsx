import dynamic from "next/dynamic";

const IntroSection = dynamic(
  () => import("@/components/section/IntroSection"),
  {
    loading: () => (
      <div className='flex min-h-[50vh] items-center justify-center'>
        Loading about section...
      </div>
    ),
  },
);

const AboutSection = dynamic(
  () => import("@/components/section/AboutSection"),
  {
    loading: () => (
      <div className='flex min-h-[50vh] items-center justify-center'>
        Loading about section...
      </div>
    ),
  },
);

const ProjectsSection = dynamic(
  () => import("@/components/section/ProjectsSection"),
  {
    loading: () => (
      <div className='flex min-h-[50vh] items-center justify-center'>
        Loading projects...
      </div>
    ),
  },
);

export default function Home() {
  return (
    <>
      <div className='mb-24'>
        <IntroSection />
      </div>

      <div id='about' className='mb-24'>
        <AboutSection />
      </div>

      <div id='project' className='mb-24 py-16'>
        <ProjectsSection />
      </div>
    </>
  );
}
