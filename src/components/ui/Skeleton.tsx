"use client";

import React from "react";

export const SkeletonAboutSection = () => (
  <div data-testid="skeleton-about" className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-200 rounded w-1/2 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-5/6 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-full" />
  </div>
);

export const SkeletonProjectsSection = () => (
  <div data-testid="skeleton-projects" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="animate-pulse p-4 border rounded">
        <div className="h-8 bg-gray-200 rounded w-2/3 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/3" />
      </div>
    ))}
  </div>
);

export const SkeletonContactSection = () => (
  <div data-testid="skeleton-contact" className="animate-pulse space-y-4 max-w-2xl mx-auto p-8">
    <div className="h-8 bg-gray-200 rounded w-1/3 mb-4" />
    <div className="h-10 bg-gray-200 rounded w-full mb-2" />
    <div className="h-10 bg-gray-200 rounded w-full mb-2" />
    <div className="h-10 bg-gray-200 rounded w-full mb-2" />
    <div className="h-32 bg-gray-200 rounded w-full mb-4" />
    <div className="h-10 bg-gray-200 rounded w-1/2" />
  </div>
);
