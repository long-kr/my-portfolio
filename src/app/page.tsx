import { AnimatedCircle } from "@/components/ui/animated-circle";
import { AnimatedText } from "@/components/ui/animated-text";

export default function Home() {
  return (
    <div className="col-span-3">
      <section className="relative min-h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="relative">
            <h1 className="text-4xl font-bold sm:text-6xl">
              Hi, I&apos;m{" "}
              <AnimatedText
                text="Long&nbsp;Huynh"
                className="relative inline-block"
                delay={0.1}
              />
            </h1>

            <AnimatedCircle />
          </div>
        </div>
      </section>
    </div>
  );
}
