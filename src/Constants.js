import css3 from "./assets/images/css3.png";
import js from "./assets/images/js.png";
import react from "./assets/images/react.png";
import html from "./assets/images/html.webp";
import airplane from "./assets/images/airplane.png";
import github from "./assets/images/github.png";
import global from "./assets/images/global.webp";
import food from "./assets/images/food.webp";
import coffee from "./assets/images/coffee.jpg";
import Safespace from "./assets/images/Safespace.webp"
import todo from "./assets/images/todo.webp"

export const experiences = [
  {
    title: "Frontend Developer Intern",
    date: "MAY 2025 - OCT 2025",
    description:
      "During my internship as a Frontend Developer, I transformed Figma designs into reusable website components and wrote maintainable code using React.js, which I learned after gaining proficiency in HTML, CSS, and JavaScript.",
  },
  {
    title: "Started Learning Web Development",
    date: "OCT 2024",
    description:
      "My web development journey began with learning HTML, CSS, and JavaScript. I started building small projects and learning the basics of web development.",
  },
];

export const skills = [
  {
    image: html,
    title: "HTML",
  },

  {
    image: css3,
    title: "CSS",
  },

  {
    image: js,
    title: "JavaScript",
  },

  {
    image: react,
    title: "React.js",
  },
];

export const projects = [
  {
    image: global,
    title: "Global Tour",
    live: airplane,
    liveLink: "https://skylark355.github.io/Global-Tour/",
    github: github,
    githubLink: "https://github.com/Skylark355/Global-Tour",
    description:
      "Global Tour is a mini web project I built while learning HTML, CSS, and JavaScript. It provides tourists with information on destinations, accommodation, food, and travel essentials. The project helped me practice front-end development and improve my web design skills.",
    stacks: [
      { name: "HTML", image: html },
      { name: "CSS", image: css3 },
      { name: "JS", image: js },
    ],
  },

  
  {
    image: coffee,
    title: "Coffe App",
    live: airplane,
    liveLink: "https://skylark355.github.io/Coffee-Shop/",
    github: github,
    githubLink: "https://github.com/Skylark355/Coffee-Shop",
    description:
      "Coffee App is a project I developed to showcase a user-friendly platform for exploring different coffee types, recipes, and brewing methods. Built with HTML, CSS, and JavaScript, it provides an interactive experience for coffee lovers, helping them discover new flavors and preparation techniques.",
    stacks: [
      { name: "HTML", image: html },
      { name: "CSS", image: css3 },
      { name: "JS", image: js },
    ],
  },

  {
    image: Safespace,
    title: "Safe Space",
    live: airplane,
    liveLink: "https://safe-space-sigma.vercel.app/",
    github: github,
    githubLink: "https://github.com/Skylark355/SafeSpace/",
    description:
      "SafeSpace is a secure digital platform that empowers individuals to report gender-based violence, access helpful resources, and find support—all in a safe, confidential, and supportive environment.",
    stacks: [{ name: "React", image: react }],
  },
  

  {
    image: food,
    title: "Food App",
    live: airplane,
    liveLink: "https://food-app-six-opal.vercel.app/",
    github: github,
    githubLink: "https://github.com/Skylark355/food-app",
    description:
      "Food App is a project I built using React.js to help users discover various recipes and meal options. It features a clean and interactive interface, allowing users to explore different cuisines effortlessly. This project enhanced my skills in React.js, component-based development, and state management while improving the overall user experience.",
    stacks: [{ name: "React", image: react }],
  },


  {
    image: todo,
    title: "Todo App",
    live: airplane,
    liveLink: "https://todo-app-chi-azure-27.vercel.app/",
    github: github,
    githubLink: "https://github.com/Skylark355/Todo-App",
    description:
      "A functional and user-friendly To-Do application built with React.js. It allows users to add, delete, and filter tasks based on their status (e.g., all, completed, pending).",
    stacks: [{ name: "React", image: react }],
  },
];
