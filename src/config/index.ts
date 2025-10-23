import calculatorImage from "@/assets/image/calculator-project-pic.png";
import nailzyImage from "@/assets/image/nailzy-project-pic.jpg";
import reservationImage from "@/assets/image/reservation-project-pic.jpg";
import movieImage from "@/assets/image/welovemovies-project-pic.jpg";
import { iconKeys, IconKeys } from "@/assets/svg";
import { Github, Linkedin, StickyNote } from "lucide-react";
import { StaticImageData } from "next/image";

// ============================================================================
// API ENDPOINTS
// ============================================================================

export const API_ENDPOINTS = {
  contact: "/api/contact",
} as const;

// ============================================================================
// APPLICATION DATA TYPES
// ============================================================================

export type Social = {
  name: string;
  url: string;
  icon: IconKeys;
  lucidIcon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type Project = {
  name: string;
  url: string;
  image: string | StaticImageData;
  github?: string;
  type: string;
  description: string;
  technologies: IconKeys[];
};

export type AppData = {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  techs: {
    language: IconKeys[];
    frontend: IconKeys[];
    backend: IconKeys[];
    database: IconKeys[];
    tool: IconKeys[];
  };
  social: Social[];
  projects: Project[];
};

// ============================================================================
// APPLICATION DATA
// ============================================================================

export const appData: AppData = {
  name: "Long Huynh",
  title: "A Fullstack Developer",
  description: `My name is Long Huynh, and I'm a full-stack developer with a passion for optimizing performance and solving complex logical problems.
I have experience working with a variety of technologies, including React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, and AWS. I am currently learning Java and Spring Boot to expand my backend knowledge and strengthen my understanding of OOP.
Furthermore, I enjoy learning how other developers apply different protocols and architectures to solve problems, and I am always looking for new challenges to improve my skills.
When I’m not coding, I enjoy playing tennis, snowboarding, and team sports like soccer and volleyball.
  `,
  email: "longhuynh@gmail.com",
  phone: "+1 469 478 7181",
  location: "Dallas Metro, Texas, USA",
  social: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/longh-dn/",
      icon: "linkedin" as IconKeys,
      lucidIcon: Linkedin,
    },
    {
      name: "GitHub",
      url: "https://github.com/long-kr",
      icon: "github" as IconKeys,
      lucidIcon: Github,
    },
    {
      name: "Resume",
      url: "https://docs.google.com/document/d/1Onp4-3ylau5gGXQMt2ob_-h9Gd3SJL81D99dLVbb83s/edit?usp=sharing",
      icon: "resume" as IconKeys,
      lucidIcon: StickyNote,
    },
  ],
  techs: {
    language: ["javascript", "typescript", "java", "python"] as IconKeys[],
    frontend: [
      "react",
      "nextjs",
      "tailwindcss",
      "jest",
      "playwright",
    ] as IconKeys[],
    backend: ["expressjs", "springboot"] as IconKeys[],
    database: ["mongodb", "postgresql", "firebase"] as IconKeys[],
    tool: ["aws", "git", "bash", "docker", "postman"] as IconKeys[],
  },
  projects: [
    {
      name: "Nailzy.com",
      url: "https://nailzy.com",
      image: nailzyImage,
      type: "professional",
      description:
        "An e-commerce platform of a status up company. Allow users to buy/sell products and manage their orders.",
      technologies: [
        iconKeys.react,
        iconKeys.nextjs,
        iconKeys.tailwindcss,
        iconKeys.typescript,
        iconKeys.expressjs,
        iconKeys.mongodb,
        iconKeys.aws,
      ],
    },
    {
      name: "Restaurant Management System",
      url: "https://reservation-longkr.netlify.app/",
      image: reservationImage,
      github: "https://github.com/long-kr/Project-Restaurant_Reservation",
      type: "school project",
      description:
        "A monorepo project that includes a client and a server. The client is a web application that allows users to manage their reservations and the server is a RESTful API that allows the client to communicate with the database.",
      technologies: [iconKeys.react, iconKeys.expressjs, iconKeys.postgresql],
    },
    {
      name: "WeLoveMovies",
      url: "https://welovemovie.netlify.app/",
      image: movieImage,
      github: "https://github.com/long-kr/WeLoveMovies",
      type: "school project",
      description:
        "A movie library that allows users to search for movies and add them to their library.",
      technologies: [iconKeys.react, iconKeys.expressjs, iconKeys.postgresql],
    },
    {
      name: "Calculator",
      url: "https://calculator-lilac-three.vercel.app/",
      image: calculatorImage,
      github: "https://github.com/long-kr/calculator",
      type: "personal",
      description:
        "A simple calculator built with React, TypeScript, and Tailwind CSS.",
      technologies: [iconKeys.react, iconKeys.typescript],
    },
  ],
};

// ============================================================================
// APPLICATION CONFIGURATION
// ============================================================================

export const APP_CONFIG = {
  name: appData.name,
  title: appData.title,
  description: appData.description,
  email: appData.email,
  phone: appData.phone,
  location: appData.location,
  social: appData.social,
  projects: appData.projects,
  api: API_ENDPOINTS,
} as const;
