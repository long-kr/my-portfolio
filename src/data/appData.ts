import calculatorImage from "@/assests/image/calculator-project-pic.png";
import nailzyImage from "@/assests/image/nailzy-project-pic.jpg";
import reservationImage from "@/assests/image/reservation-project-pic.jpg";
import movieImage from "@/assests/image/welovemovies-project-pic.jpg";
import { IconKeys } from "@/assests/svg";
import { StaticImageData } from "next/image";

export type Social = {
    name: string;
    url: string;
    icon: string;
}

export type Project = {
    name: string;
    url: string;
    image: string | StaticImageData;
    github?: string;
    type: string;
    description: string;
    technologies: IconKeys[];
}


export type AppData = {
    name: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    social: Social[];
    projects: Project[];
}


export const appData = {
    name: "Long Huynh",
    title: "A Fullstack Developer",
    description: "I'm a software engineer with a passion for building scalable and efficient systems.",
    email: "longhuynh@gmail.com",
    phone: "+1 469 478 7181",
    location: "Dallas Metro, Texas, USA",
    social: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/longh-dn/",
            icon: "linkedin",
        },
        {
            name: "GitHub",
            url: "https://github.com/long-kr",
            icon: "github",
        },
    ],
    projects: [
        {
            name: "Nailzy.com",
            url: "https://nailzy.com",
            image: nailzyImage,
            type: "professional",
            description: "An e-commerce platform of a status up company. Allow users to buy/sell products and manage their orders.",
            technologies: ["react", "nextjs", "tailwindcss", "typescript", "expressjs", "mongodb", "aws"] as IconKeys[],
        },
        {
            name: "Restaurant Management System",
            url: "https://final-cap-reservations-cliend.vercel.app/dashboard",
            image: reservationImage,
            github: "https://github.com/long-kr/Project-Restaurant_Reservation",
            type: "personal",
            description: "A monorepo project that includes a client and a server. The client is a web application that allows users to manage their reservations and the server is a RESTful API that allows the client to communicate with the database.",
            technologies: ["react", "typescript", "expressjs", "postgresql"] as IconKeys[],
        },
        {
            name: "WeLoveMovies",
            url: "https://starter-movie-front-end-tau.vercel.app/movies",
            image: movieImage,
            github: "https://github.com/long-kr/WeLoveMovies",
            type: "school project",
            description: "A movie library that allows users to search for movies and add them to their library.",
            technologies: ["react", "typescript", "expressjs", "postgresql"] as IconKeys[],
        },
        {
            name: "Calculator",
            url: "https://calculator-lilac-three.vercel.app/",
            image: calculatorImage,
            github: "https://github.com/long-kr/calculator",
            type: "personal",
            description: "A simple calculator built with React, TypeScript, and Tailwind CSS.",
            technologies: ["react", "typescript"] as IconKeys[],
        }
    ],
}