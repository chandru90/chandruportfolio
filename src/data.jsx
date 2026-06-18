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
import foodstories from "./components/foodstories.png";
import { SiTypescript } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
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
    icon: <FaGithub className="h-16 w-16 text-emerald-500 mr-28" />,
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: (
      <div className="rounded-xl flex items-center justify-center">
        <SiTypescript className="mr-48 h-12 w-12 text-emerald-500" />
      </div>
    ),
  },
  {
    id: nanoid(),
    title: "Redis",
    icon: (
      <div className="rounded-xl flex items-center justify-center">
        <SiRedis className=" mr-60  h-12 w-12 text-emerald-500" />
      </div>
    ),
  },
  {
    id: nanoid(),
    title: "MySQL",
    icon: (
      <div className="rounded-xl flex items-center justify-center">
        <SiMysql className="mr-60 h-12 w-12 text-emerald-500 mr-16" />
      </div>
    ),
  },

  {
  id: nanoid(),
  title: "Power BI",
  icon: (
    <div className="rounded-xl flex items-center justify-center mr-52">
      <SiPowerbi className="h-12 w-12 text-emerald-500" />
    </div>
  ),
}
];

export const projects = [
    {
    id: nanoid(),
    img: foodstories, // Use the imported image
    url: "https://recipemaker-git-updated-chandru90s-projects.vercel.app/",
    github: "https://github.com/chandru90/recipemaker/tree/master",
    title: "Food Stories",
    text: "Food Stories is a React-based web application designed to let users explore engaging stories centered around food, culture, recipes, and culinary experiences. The platform provides an interactive and visually appealing experience for discovering food-related content and culinary traditions.",
  },
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
    title: " Chat Commerce Application",
    text: "A real-time chat-based eCommerce application that enables users to browse and purchase products through an integrated chat interface. The platform consists of a chat module, eCommerce store. Real-time synchronization is achieved using WebSockets, while scheduled notifications and background jobs are handled through Node Cron Scheduler..",
  },
];
