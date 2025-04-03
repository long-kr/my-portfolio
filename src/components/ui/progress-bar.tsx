"use client";

import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { useEffect } from "react";

// Import nprogress styles
import "nprogress/nprogress.css";

// Customize nprogress
NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
  minimum: 0.08,
});

export const ProgressBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    // Start progress bar when route changes
    handleStart();

    // Stop progress bar when route change is complete
    const timeout = setTimeout(handleStop, 100);

    // Cleanup
    return () => {
      clearTimeout(timeout);
      handleStop();
    };
  }, [pathname, searchParams]);

  // Force cleanup on unmount
  useEffect(() => {
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};
