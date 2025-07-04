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
                  className: "h-[1.3rem] w-[1.3rem]",
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
                className="flex flex-col rounded bg-milk-white shadow dark:bg-slate-100"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  {appData.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <SVGIcon
                          iconKey={item.icon}
                          svgProps={{ className: "w-10 h-10 p-2" }}
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
