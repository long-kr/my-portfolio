import { appData } from "@/config";
import { cn } from "@/lib";
import { ArrowDown } from "lucide-react";
import { AnimatedText, Button } from "../ui";

export default function IntroSection() {
  const text = "No Dark Mode Allowed!";

  return (
    <section className='min-h-dvh'>
      <div className='flex min-h-dvh flex-wrap items-center justify-center'>
        <div className='hidden dark:flex dark:flex-row dark:flex-wrap'>
          {text.split(" ").map((word) => (
            <div key={word} className='flex flex-row px-1 hover:cursor-none'>
              {word.split("").map((char, index) => (
                <span
                  key={index}
                  className={cn(
                    "p-1 text-9xl font-bold text-primary dark:text-white",
                    "inline-block transition delay-500 hover:animate-[leftToRight_0.8s_ease-out_forwards]",
                  )}
                >
                  {char}
                </span>
              ))}{" "}
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-8 dark:hidden'>
          <h1 className='text-2xl font-bold sm:text-4xl md:text-6xl'>
            Hi!{" "}
            <AnimatedText
              text={`I'm ${appData.name}`}
              className='relative inline-block'
              delay={0.1}
            />
          </h1>

          <h2 className='text-center text-xl sm:text-2xl md:text-4xl'>
            Full Stack Developer
          </h2>

          <div className='flex flex-row justify-center gap-6'>
            <a href='#about'>
              <Button variant='primary'>About me</Button>
            </a>

            <a href='#projects'>
              <Button variant='light'>View works</Button>
            </a>
          </div>

          <div className='flex justify-center gap-6'>
            {appData.social.map((social) => {
              const SocialIcon = social.lucidIcon;
              return (
                <a
                  href={social.url}
                  key={social.name}
                  target='_blank'
                  rel='noreferrer'
                >
                  <SocialIcon className='hover:text-primary/70 text-muted-foreground transition hover:scale-110 hover:text-foreground' />
                </a>
              );
            })}
          </div>

          <div className='flex justify-center'>
            <span>
              <ArrowDown className='h-8 w-8 animate-bounce text-primary' />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
