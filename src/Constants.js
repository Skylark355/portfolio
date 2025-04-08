import css3 from "./assets/images/css3.png";
import js from "./assets/images/js.png";
import react from "./assets/images/react.png";
import html from "./assets/images/html.webp";
import airplane from "./assets/images/airplane.png";
import github from "./assets/images/github.png";
import Productly from "./assets/images/Productly.webp";
import global from "./assets/images/global.webp";
import food from "./assets/images/food.webp";
import coffee from "./assets/images/coffee.jpg";

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
    image: Productly,
    title: "Productly",
    live: airplane,
    liveLink: "https://skylark355.github.io/Productly/",
    github: github,
    githubLink: "https://github.com/Skylark355/Productly",
    description:
      "Productly is a project focused on Design Thinking Superpowers, highlighting how design thinking enhances creativity, problem-solving, and innovation. It explores key principles like empathy, ideation, prototyping, and user-centered design. Through this project, I gained a deeper understanding of design thinking methodologies and how they can be applied to develop impactful solutions.",
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
];
