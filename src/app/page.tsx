import { AnimatedCircle, AnimatedText } from "@/components/ui";

export default function Home() {
  return (
    <div className="col-span-3">
      <section className="relative min-h-[100vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="relative">
            <h1 className="text-2xl font-bold sm:text-4xl md:text-6xl">
              Hi, I&apos;m{" "}
              <AnimatedText
                text="Long&nbsp;Huynh"
                className="relative inline-block"
                delay={0.1}
              />
            </h1>

            <AnimatedCircle containerClassName="md:-right-4 md:-top-4 md:h-24 md:w-24" />
          </div>
        </div>
      </section>
    </div>
  );
}
