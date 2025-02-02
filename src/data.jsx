import { nanoid } from "nanoid";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFeatherAlt,
  FaBity,
  FaGithub,
} from "react-icons/fa";

import ingridentsImg from "./components/ingridients.avif";
import ecomImg from "./components/ecom.webp";
import chatImg from "./components/chat.jpg";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  { id: nanoid(), href: "#internships", text: "internships" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "NodeJS",
    icon: <FaNodeJs className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "MongoDB",
    icon: <FaFeatherAlt className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Redux Toolkit",
    icon: <FaBity className="h-16 w-16 text-emerald-500" />,
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGithub className="h-16 w-16 text-emerald-500" />,
  },
];

export const projects = [
  {
    id: nanoid(),
    img: ingridentsImg, // Use the imported image
    url: "https://recipemaker-smoky.vercel.app/",
    github: "https://github.com/chandru90/recipemaker/tree/master",
    title: "Recipe Maker",
    text: "A food recipe app that allows users to explore, create, and save recipes. The app provides a platform for users to browse a diverse collection of recipes and add their own recipes. Each recipe includes details such as ingredients with step-by-step instructions. Users can personalize their experience by saving favorite recipes and contributing to the recipe database. Tech Stack: React, NodeJs, MongoDB, Express, JWT Authentication",
  },
  {
    id: nanoid(),
    img: ecomImg, // Use the imported image
    url: "https://ecommercefrontend-nine-coral.vercel.app/",
    github: "https://github.com/chandru90/ecommercefrontend/tree/master",
    title: "E-commerce Application",
    text: "An e-commerce application that allows users to purchase products, leveraging Express.js, React, and Node.js. The app features search, filtering, and pagination. State management for the cart is handled using Redux Toolkit, and orders are stored in MongoDB, which can be retrieved using the user ID.",
  },
  {
    id: nanoid(),
    img: chatImg, // Use the imported image
    url: "https://chat-client-bice.vercel.app/",
    github: "https://github.com/chandru90/chat-client",
    title: "Realtime Chat Application",
    text: "A real-time chat application where users can communicate with each other through WebSockets. The app has a schedule feature where users can schedule messages to be sent at a particular time using the Node.js cron scheduler.",
  },
];
