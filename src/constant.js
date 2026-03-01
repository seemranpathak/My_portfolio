// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
//import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
//import gsapLogo from "./assets/tech_logo/gsap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import supabaseLogo from "./assets/tech_logo/supabase.svg";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
//import postgreLogo from "./assets/tech_logo/postgre.png";
import shadcnlogo from "./assets/tech_logo/shadcn.webp";
//import zodlogo from "./assets/tech_logo/zod.png";
//import zustandlogo from "./assets/tech_logo/zustand.svg";
import reduxlogo from "./assets/tech_logo/redux.svg";
//import clerklogo from "./assets/tech_logo/clerk.svg";
//import arcjet from "./assets/tech_logo/arcjet.svg";
import socketio from "./assets/tech_logo/socketio.svg";
import sqllogo from "./assets/tech_logo/sql.svg";
import mysqllogo from "./assets/tech_logo/mysqllogo.svg";
import mongooselogo from "./assets/tech_logo/mongoose.png";
//import prismalogo from "./assets/tech_logo/prismalogo.svg";
//import neondb from "./assets/tech_logo/neondb.svg";
import cloudinarylogo from "./assets/tech_logo/cloudinary.svg";
import imagekit from "./assets/tech_logo/imagekit.svg";
//import sevalla from "./assets/tech_logo/sevalla.jpeg";
import render from "./assets/tech_logo/render.png";
//import pythonLogo from "./assets/tech_logo/python-logo.svg";
//import graphqlLogo from "./assets/tech_logo/graphql.png";
import restapilogo from "./assets/tech_logo/restapi.svg";
//import sqlitelogo from "./assets/tech_logo/sqlite.svg";
import webrtclogo from "./assets/tech_logo/webrtc.png";

// Experience Section Logo's
import etechlogo from "./assets/company_logo/etechlogo.jpeg";
import freelancelogo from "./assets/company_logo/freelancelogo.png";

// Education Section Logo's
import choukseylogo from "./assets/education_logo/choukseylogo.jpeg";
import cgbselogo from "./assets/education_logo/cgbse.webp";

// Project Section Logo's
 import dinedashlogo from "./assets/work_logo/DineDash.png";
 import Cinemate from "./assets/work_logo/Cinemate.png";
 import StackPulse from "./assets/work_logo/Stackpulse.jpg";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: "SaSS", logo: sassLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      { name: "ShadCn", logo: shadcnlogo },
      // { name: "Zod", logo: zodlogo },
      // { name: "Zustand", logo: zustandlogo },
      { name: "Redux Toolkit", logo: reduxlogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "Supabase", logo: supabaseLogo },
      // { name: "Clerk", logo: clerklogo },
      // { name: "Arcjet", logo: arcjet },
      // { name: "GraphQL", logo: graphqlLogo },
      { name: "RestAPI", logo: restapilogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "SQL", logo: sqllogo },
      // { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      // { name: "PostgresSQL", logo: postgreLogo },
      { name: "MySql", logo: mysqllogo },
      { name: "Mongoose", logo: mongooselogo },
      // { name: "Prisma", logo: prismalogo },
      // { name: "NeonDB", logo: neondb },
      // { name: "SQLite", logo: sqlitelogo },
    ],
  },
  {
    title: "RealTime Technologies",
    skills: [
      { name: "Socket.Io", logo: socketio },
      { name: "WebRTC", logo: webrtclogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Cloudinary", logo: cloudinarylogo },
      { name: "ImageKit", logo: imagekit },
      { name: "Github", logo: githubLogo },
      // { name: "Sevalla", logo: sevalla },
      { name: "Render", logo: render },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: freelancelogo,
    role: "Fullstack Developer",
    company: "Self Employed",
    date: "Jan 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.  Build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment. The most significant impact Is I developed a billing software in Nextjs for a spare parts bussiness for handling transactions and filter them through dates with an responsive ui.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Express",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: etechlogo,
    role: "Web Developer Intern",
    company: "E-tech",
    date: "July 2024 -  Dec 2024",
    desc: "Web developer internship at Etech , where i had amazing mentors that guide me on implementing theory concepts to practical projects . I learned react in dept along with several packages in the react library and how to use them , which then helped me to create responsive and catchy Uis.",
    skills: [
      "ReactJS",
      "Redux Toolkit",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "MongoDb",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: choukseylogo,
    school: "Chouksey Engineering College, Bilaspur",
    date: "October 2021 - October 2025",
    grade: "79%",
    desc: "I completed my Bachelor's of technology degree in Computer Science (B.Tech.) from Chouksey Engineering College, Bilaspur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Chouksey Engineering College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: cgbselogo,
    school: "Bharat Mata Higher Secondary School, Bilaspur",
    date: "Apr 2020 - March 2021",
    grade: "95%",
    desc: "I completed my class 12 education from Bharat Mata Higher Secondary School, Bilaspur , under the CG board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
    degree: "CG Board(XII) - PCM ",
  },
  {
    id: 2,
    img: cgbselogo,
    school: "Bharat Mata Higher Secondary School, Bilaspur",
    date: "Apr 2018 - March 2019",
    grade: "84.5%",
    desc: "I completed my class 10 education from Bharat Mata Higher Secondary School, Bilaspur, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X) - All Subjects",
  },
];

export const projects = [
  {
    id: 0,
    title: "Cinemate - Movie Review and Recommendation Platform",
    description:
      "Cinemate is a movie discovery platform that helps users explore popular, top-rated, and upcoming films in one place. It displays movie posters and descriptions so visitors can browse and find interesting movies to watch. The site is designed to showcase key movie details in a clean, user-friendly layout, making it easier for users to discover new films and decide what to watch next.",
    image: Cinemate,
    tags: ["React", "JavaScript", "HTML", "CSS", "TMDB API", "Git", "GitHub", "Netlify"],
    github: "",
    webapp: "https://cinemate-ul.netlify.app/",
  },
  {
    id: 1,
    title: "Dine Dash - Online Food & Delivery Platform",
    description:
      "An online food & delivery fullstack application with email verification and high level authentication. DineDash is equipped with completely responsive ui with dark and light mode functionality.Dine Dash provides user an interface to order dishes , as well as a admin panel for restaurant owners. DineDash uses mongodb for storage, Typescript for robust code , zod for form validation, along with various tools such as Cloudinary , mailtrap , stripe webhooks and Zustand for state management.Dine Dash is a completely scalable platform developed to scale efficiently",
    image: dinedashlogo,
    tags: ["React Js", "Express", "Typescript", "Stripe", "Zustand", "MongoDb"],
    github: "",
    webapp: "https://dinedashofficial.netlify.app/",
  },

  {
    id: 2,
    title: "StackPulse - Real-Time Chat Application",
    description:
    "StackPulse is a real-time collaborative development platform designed to help developers work together seamlessly. It enables live collaboration, instant updates, and smart assistance to improve team productivity. With real-time communication and AI-powered support, StackPulse creates an efficient environment for building, reviewing, and managing code collaboratively",
    image: StackPulse,
    tags: [
      "React",
      "Node.js",
      "Socket.IO",
      "Redis",
      "MongoDB",
      "Google Gemini AI"
    ],
    github:
      "https://github.com/seemranpathak/STACKPLUS",
    webapp: "https://stack-pulse.netlify.app/register/",
  },
  
];
