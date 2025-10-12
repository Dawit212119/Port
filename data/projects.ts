export type Project = {
  id: string;
  title: string;
  description: string;
  type: "Full Stack" | "Backend" | "Frontend";
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudyUrl?: string;
  media?: string; // path to gif/video/image in public
  link?: string;
};

export const projects: Project[] = [
  //   {
  //     id: "devportfolio",
  //     title: "DEVPORTFOLIO",
  //     description:
  //       "Modern portfolio website built with Next.js, Framer Motion, and TypeScript. Features animated components, responsive design, and smooth transitions.",
  //     type: "Frontend",
  //     technologies: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
  //     liveUrl: "https://devportfolio-phi.vercel.app/",
  //     repoUrl: "https://github.com/Dawit212119/DEVPORTFOLIO",
  //     caseStudyUrl: "#",
  //     media: "/images/devportfolio.jpg",
  //   },
  {
    id: "Consultancy startup",
    title: "Agazh (Startup)",
    description:
      "A digital platform that connects buyers with experts to provide personalized advice on product selection, budgeting, and marketplace recommendations. Built to streamline purchasing decisions and create a revenue-generating consultation model",
    type: "Backend",
    technologies: ["Nextjs", "TypeScript", "Express", "zod"],
    repoUrl: "https://github.com/Leul120/Agazh",
    caseStudyUrl: "#",
    media: "/images/Agazh.png",
    link: "https://agazh.vercel.app/",
  },
  {
    id: "dms",
    title: "Document Management System (Freelance)",
    description:
      "Document management system built with Next.js, Express, and Prisma. Features file upload, version control, and user permissions.",
    type: "Backend",
    technologies: [
      "Next.js",
      "Express",
      "Prisma",
      "TypeScript",
      "zod",
      "Firbase",
    ],
    repoUrl: "https://github.com/Dawit212119/DMS",
    caseStudyUrl: "#",
    media: "/images/DMS.png",
    link: "https://dms-prod-e3ds.vercel.app/",
  },
  {
    id: "consultancy",
    title: "Student Consultancy App (Freelance)",
    description:
      "Full-stack consultancy application built with Next.js, Tailwind CSS, Prisma, and TypeScript. Features user management, project tracking, and real-time updates.",
    type: "Full Stack",
    technologies: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/Dawit212119/Consultancy",
    caseStudyUrl: "#",
    media: "/images/cons.png",
    link: "https://heroconsultancy-kcip.vercel.app/",
  },

  {
    id: "mern-estate",
    title: "Real Estate",
    description:
      "Real estate application using MERN stack and Tailwind CSS. Features property listings, search filters, and user authentication.",
    type: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    repoUrl: "https://github.com/Dawit212119/mern-esate",
    caseStudyUrl: "#",
    media: "/images/mernEstate.png",
    link: "https://mern-esate-fb5y.onrender.com/",
  },

  {
    id: "anbessa-admin",
    title: "Anbessa Admin Panel",
    description:
      "Administrative panel for Anbessa Bus System built with React, TypeScript, and Django. Features dashboard analytics and system management.",
    type: "Frontend",
    technologies: ["React", "TypeScript", "Django"],
    repoUrl: "https://github.com/Dawit212119/Anbessa-Admin",
    caseStudyUrl: "#",
    media: "/images/anbesa.png",
    link: "",
  },
  {
    id: "EG",
    title: "EG-Store (Game Rental & Youth Development)",
    description:
      "Developed EG, an e-commerce platform for Chewata Awaki, enabling seamless game purchases and rentals. Utilized Next.js, Prisma ORM,MongoDb, and Telebirr for full-stack development, e-commerce functionalities, and payment integration.",
    type: "Backend",
    technologies: [
      "Nextjs",
      "TypeScript",
      "Express",
      "Prisma",
      "TeleBirr",
      "Cloudinary",
      "MongoDB",
    ],
    repoUrl: "https://github.com/Zemenaytech/EG-Store",
    caseStudyUrl: "#",
    media: "/images/Eg.png",
    link: "",
  },
  {
    id: "Chat with me",
    title: "AI-Powered Smart Scheduler (In Progress)",
    description:
      "A real-time chat app built with React.js, Socket.io, MongoDB, and DaisyUI. Currently supports seamless messaging — future updates will add AI to detect commitments and auto-schedule reminders.",
    type: "Full Stack",
    technologies: ["React", "TypeScript", "Socket.io", "DaisyUI", "AI"],
    repoUrl: "https://github.com/Dawit212119/Chat-With-Me",
    caseStudyUrl: "#",
    media: "/images/chat.png",
    link: "",
  },
  {
    id: "PromptVault",
    title: "PromptVault (In Progress)",
    description:
      "A smart platform for saving and organizing your favorite prompts 💬 along with AI-generated answers 🤖. Users can choose to keep prompts private 🔒 or share them publicly 🌍. Currently in development — full ChatGPT integration coming soon when funding 💸 allows!",
    type: "Full Stack",
    technologies: ["Nextjs", "TypeScript", "AI", "MongoDb"],
    repoUrl: "https://github.com/Dawit212119/Promptopia",
    caseStudyUrl: "#",
    media: "/images/Prompt.png",
    link: "promptopia-shxz.vercel.app/",
  },
];
