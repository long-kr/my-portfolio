import { appData } from "@/config";
import { cn } from "@/lib";
import { AnimatedText } from "../ui";

export default function IntroSection() {
  const text = "No Dark Mode Allowed!";

  return (
    <section className='min-h-dvh'>
      <div className='flex min-h-dvh flex-wrap items-center justify-center'>
        <div className='hidden dark:flex'>
          {text.split(" ").map((word) => (
            <span key={word} className='px-1 hover:cursor-none'>
              {word.split("").map((char, index) => (
                <span
                  key={index}
                  className={cn(
                    "p-1 text-9xl font-bold text-primary",
                    "inline-block transition delay-500 hover:animate-[leftToRight_0.8s_ease-out_forwards]",
                  )}
                >
                  {char}
                </span>
              ))}{" "}
            </span>
          ))}
        </div>
        <h1 className='block text-2xl font-bold dark:hidden sm:text-4xl md:text-6xl'>
          Hi!{" "}
          <AnimatedText
            text={`I'm ${appData.name}`}
            className='relative inline-block'
            delay={0.1}
          />
        </h1>
      </div>
    </section>
  );
}

//  {isClient && theme === "dark" ? (
//           // Animated "No Dark Mode Allowed!" text
//           text.split(" ").map((word) => (
//             <span key={word} className='px-1 hover:cursor-none'>
//               {word.split("").map((char, index) => (
//                 <span
//                   key={index}
//                   className={cn(
//                     "p-1 text-9xl font-bold text-primary",
//                     "inline-block transition delay-500 hover:animate-[leftToRight_0.8s_ease-out_forwards]",
//                   )}
//                 >
//                   {char}
//                 </span>
//               ))}{" "}
//             </span>
//           ))
//         ) : (
//           <h1 className='hidden text-2xl font-bold dark:block sm:text-4xl md:text-6xl'>
//             Hi!{" "}
//             <AnimatedText
//               text={`I'm ${appData.name}`}
//               className='relative inline-block'
//               delay={0.1}
//             />
//           </h1>
//         )}
