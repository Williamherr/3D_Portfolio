import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  threejs,
  abacus,
  rush,
  tilt,
  flexibble,
  nextjs,
  nextjs_white,
  dotnet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack",
    icon: mobile,
  },
  {
    title: "Next Developer",
    icon: nextjs_white,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: ".Net Core",
    icon: dotnet,
  },
];

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company_name: "Abacus Group LLC",
    icon: abacus,
    iconBg: "#FFFFFF",
    date: "August 2019",
    points: [
      "CRM: Maintained dashboards and created web applications.",
      "Developed MVC web pages using C#, JavaScript, HTML, and CSS.",
      "Assisted in integrating a new portal, which involved creating web pages with React/Vite, configuring IIS rewrites, and setting up YAML file pipelines for Azure DevOps CI/CD.",
      "Implemented efficient algorithms and data structures to optimize software performance, resulting in a 99% faster page loading speed.",
      "Utilized Azure DevOps and Bitbucket for source control management.",
      "Created SQL scripts to query complex data and generate reports.",
      "Established SFTP connections with clients and vendors for secure file transfers.",
      "Assisted in maintaining authorization by integrating with OKTA.",
      "Developed REST and SOAP APIs using .NET Core 7 and Swagger",
    ],
  },
];

const tagColors = {
  code: "blue-text-gradient",
  styles: "pink-text-gradient",
  db: "green-text-gradient",
  other: "orange-text-gradient",
};

const projects = [
  {
    name: "Rush",
    description:
      "Often, when students emailed professors, they took several days to respond to a simple question. Rush is a direct messaging app for students and professors, designed as an alternative to email. Professors can create classes and students can create groups. Users can message each other and the messages are updated in real time.",
    tags: [
      {
        name: "android studio (java)",
        color: tagColors.code,
      },
      {
        name: "tailwind",
        color: tagColors.styles,
      },
      {
        name: "firebase",
        color: tagColors.db,
      },
    ],
    image: rush,
    source_code_link: "https://github.com/Williamherr/rush",
  },
  {
    name: "Tilt",
    description: `Tilt is a Thread clone web application. It provides a user-friendly platform for seamless and
                  interactive communication. Users can post and read both personal and community
                  threads, fostering a vibrant and engaging online community.
                  `,
    tags: [
      {
        name: "next.js",
        color: tagColors.code,
      },
      {
        name: "mongodbb",
        color: tagColors.db,
      },
      {
        name: "shadcn-ui",
        color: tagColors.styles,
      },

      {
        name: "clerk auth",
        color: tagColors.other,
      },
      {
        name: "uploadthing",
        color: tagColors.other,
      },
    ],
    image: tilt,
    source_code_link: "https://github.com/Williamherr/tilt",
  },
  {
    name: "Flexibble",
    description:
      "Flexibble is a Dribbble-inspired web application, offering a platform for designers to share their work. It’s built with modern technologies for a seamless user experience and efficient data management, ensuring a secure and innovative platform for showcasing design work.",
    tags: [
      {
        name: "next.js",
        color: tagColors.code,
      },
      {
        name: "graphql",
        color: tagColors.db,
      },
      {
        name: "tailwind",
        color: tagColors.styles,
      },
      {
        name: "cloudinary",
        color: tagColors.other,
      },
      {
        name: "next auth",
        color: tagColors.other,
      },
    ],
    image: flexibble,
    source_code_link: "https://github.com/Williamherr/grafbase_flexibble",
  },
];
const testimonials = [
  {
    testimonial:
      "Will was a rockstar and I could always rely on him to get things done",
    name: "Zeng Xiong",
    designation: "Senior Software Engineer",
    company: "Abacus Group LLC",
    image:
      "https://media.licdn.com/dms/image/D4E03AQEoWYOtL5gjsQ/profile-displayphoto-shrink_800_800/0/1704586950523?e=1712793600&v=beta&t=LV3E2qRr9ZFgm0H565POsYVYu_XUdgKsKKaAhv3O7tg",
    linkedin: "https://www.linkedin.com/in/zengxiong/",
  },
  {
    testimonial:
      "William is easy to work with and takes instruction well. He is smart, and quickly picks up on things, whether it's problem solving, or processes.",
    name: "David Olson",
    designation: "Senior Software Engineer",
    company: "Abacus Group LLC",
    image:
      "https://media.licdn.com/dms/image/C4D03AQHqR-j8X9iV8Q/profile-displayphoto-shrink_800_800/0/1640292659354?e=1712793600&v=beta&t=8kxIGBswKcHxif3tN3tDo7muydCmkRyl6ea_BBNlSJM",
    linkedin: "https://www.linkedin.com/in/david-olson-372521229/",
  },
  {
    testimonial:
      "William is an exceptionally efficient developer who does not sacrifice attention to detail.",
    name: "Alexandra Henry",
    designation: "Director of Product Management",
    company: "Abacus Group LLC",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    linkedin: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
