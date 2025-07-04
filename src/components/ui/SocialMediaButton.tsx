"use client";

import { appData } from "@/config";
import { cn } from "@/lib";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button, SVGIcon } from ".";

export const SocialMediaButton = ({
  className,
}: Readonly<{ className?: string }>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("fixed bottom-4 right-16 z-50", className)}>
      <TooltipProvider>
        <Tooltip open={isOpen} onOpenChange={setIsOpen}>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-9 px-0"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <SVGIcon
                iconKey="contact"
                svgProps={{
                  className: "h-[1.2rem] w-[1.2rem]",
                  fill: "var(--primary-color)",
                }}
              />
            </Button>
          </TooltipTrigger>

          <AnimatePresence>
            {isOpen && (
              <TooltipContent
                asChild
                forceMount
                className="flex flex-col rounded bg-milk-white shadow dark:bg-slate-100 dark:outline dark:outline-1 dark:outline-slate-200 dark:ring dark:ring-slate-200"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {appData.social.map((item, i) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: 10,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <SVGIcon
                          iconKey={item.icon}
                          divProps={{
                            className: "flex items-center justify-center",
                          }}
                          svgProps={
                            i === appData.social.length - 1
                              ? { width: "2rem", height: "2rem" }
                              : {
                                  width: "2.5rem",
                                  height: "2.5rem",
                                }
                          }
                        />
                      </motion.div>
                    </a>
                  ))}
                </motion.div>
              </TooltipContent>
            )}
          </AnimatePresence>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
