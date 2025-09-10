import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  python,
  cpp,
  psql,
  gitthub,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FullStack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "cpp",
    icon: cpp,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "psql",
    icon: psql,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: gitthub,
  },
];

const experiences = [
  {
    title: "Freelance FullStack Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Jan 2024 - Present",
    points: [
      "Built and maintained full-stack web applications using HTML, CSS, JavaScript, and Python.",
      "Developed responsive front-end interfaces with React.js and Tailwind CSS.",
      "Designed and managed backend logic, databases, and API integrations.",
      "Implemented authentication, form validation, and optimized performance for scalability.",
      "Collaborated on projects combining AI concepts with modern web technologies.",
    ],
    
  },
  {
    title: "CSIT STUDENT",
    company_name: "NED UNIVERSITY",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "Aug 2024 - AUG 2028",
    points: [
      
        "Pursuing a Bachelor's degree in Computer Science at NED University (2024 - 2028).",
        "Building a strong foundation in programming, data structures, and algorithms.",
        "Gaining hands-on experience with C++, Python, and core web technologies (HTML, CSS, JavaScript).",
        "Exploring interests in Full-Stack Development and Artificial Intelligence.",
      ],
      
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shopping Application",
    description:
      "A stylish, fullscreen Shopping Application built with C++ and the Qt framework, designed to provide a smooth user interface for login authentication and navigation into the main shopping interface.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "C.MAKE",
        color: "green-text-gradient",
      },
      {
        name: "QT",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/Abdul-Rafay2005/online_shopping_store.",
    
  },
  {
    name: "AI Model",
    description:
      "Developed a personal AI model inspired by Jarvis, capable of engaging in natural conversations, answering general and logical queries, and following voice/text commands. The assistant can perform basic PC operations, automate routine tasks, and provide an interactive user experience by combining programming logic with AI techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/Abdul-Rafay2005/Jarvis",
    
  },
  {
    name: "Business Website ",
    description:
      "Developed a responsive and modern website for Rafnab Solution, a small IT startup and software house, showcasing services, team, and contact features using HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    // github link ⬇️
    source_code_link: "https://github.com/Abdul-Rafay2005/RafNabWeb",
    // project link ⬇️
    live_website_link: "https://abdul-rafay2005.github.io/RafNabWeb/",
  },
];

export { services, technologies, experiences, testimonials, projects };
