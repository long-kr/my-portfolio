"use client";

import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import { useEffect } from "react";

import "nprogress/nprogress.css";

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
    handleStart();
    const timeout = setTimeout(handleStop, 100);
    return () => {
      clearTimeout(timeout);
      handleStop();
    };
  }, [pathname, searchParams]);

  useEffect(() => {
    return () => {
      NProgress.done();
    };
  }, []);

  return null;
};
