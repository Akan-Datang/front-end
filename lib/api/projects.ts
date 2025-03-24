// api/projects.ts
export interface Technology {
  name: string
  icon: string // Format: "fa:Html5" or "si:NextDotJs" or "lu:Cloud"
}

export interface Challenge {
  id: number
  title: string
  description: string
  solution: string
}

export interface Project {
  id: string
  imageSrc: string
  title: string
  description: string
  variant?: "large" | "small"
  tags: string[]
  link?: string
  category: string
  technologies?: {
    frontend?: Technology[]
    backend?: Technology[]
    database?: Technology[]
    hosting?: Technology[]
  }
  challenges?: Challenge[]
  outcome?: string
}

export function getProjects(): Project[] {
  return projectsData
}

export function getProjectByTitle(title: string): Project | undefined {
  return projectsData.find((project) => project.title.toLowerCase().replace(/\s+/g, "-") === title)
}

export function getCategories(): string[] {
  const categories = new Set<string>()
  projectsData.forEach((project) => categories.add(project.category))
  return ["All", ...Array.from(categories)]
}

const projectsData: Project[] = [
  {
    id: "1",
    imageSrc: "/projects/foodcare.PNG",
    title: "Custom Website Development",
    description:
      "A website to help donors who wish to voluntarily donate their excess food to people who need sufficient food as a source of protein and their daily nutrition.",
    variant: "large",
    tags: ["Web Development", "UI/UX", "Social Impact"],
    link: "https://foodcare.xyzuan.my.id/",
    category: "WebDevelopment",
    technologies: {
      frontend: [
        { name: "Next.js", icon: "si:Nextdotjs" },
        { name: "React", icon: "fa:React" }, // Ikon generik untuk framework
        { name: "Tailwind CSS", icon: "si:Tailwindcss" },
      ],
      backend: [    
        { name: "Node.js", icon: "fa:NodeJs" },
        { name: "Prisma", icon: "si:Prisma" },],
      database: [{ name: "MongoDB", icon: "si:Mongodb" }],
      hosting: [{ name: "Vercel", icon: "si:Vercel" }],
    },
    challenges: [
      {
        id: 1,
        title: "Data Management",
        description: "Managing food donation data and ensuring accurate tracking of donations.",
        solution: "Implemented a robust database schema with real-time updates and notifications.",
      },
      {
        id: 2,
        title: "User Experience",
        description: "Creating an intuitive interface for both donors and recipients.",
        solution: "Designed a user-friendly UI with clear workflows and accessibility features.",
      },
    ],
    outcome:
      "The FoodCare platform successfully connected food donors with recipients, reducing food waste and helping those in need. The platform facilitated hundreds of donations and created a sustainable community of regular donors.",
  },
  {
    id: "2",
    imageSrc: "/landing/prjct1.jpg",
    title: "Top Up Website My Telkomsel Provider",
    description: "Website from Company Neutech that implements top-up and purchases for their provider.",
    tags: ["Web Development", "E-Commerce", "Payment Integration"],
    link: "https://simsppob-satria-abimanyu.vercel.app/auth/login",
    category: "WebDevelopment",
    technologies: {
      frontend: [
        { name: "HTML", icon: "fa:Html5" },
        { name: "CSS", icon: "fa:Css3Alt" },
        { name: "JavaScript", icon: "fa:Js" },
        { name: "React", icon: "fa:React" },
      ],
      backend: [
        { name: "Next.js", icon: "si:Nextdotjs" },
        { name: "Node.js", icon: "fa:NodeJs" }, // Perbaikan format Node.js
      ],
      database: [{ name: "MongoDB", icon: "si:Mongodb" }], // SiMongodb
      hosting: [
        { name: "Cloud Hosting", icon: "lu:Cloud" }, // LuCloud
      ],
    },
    challenges: [
      {
        id: 1,
        title: "Payment Integration",
        description: "Integrating multiple payment gateways securely.",
        solution: "Implemented a unified payment processing system with encryption and security measures.",
      },
      {
        id: 2,
        title: "Transaction Management",
        description: "Ensuring reliable transaction processing and history tracking.",
        solution: "Created a robust transaction management system with failover mechanisms and detailed logging.",
      },
    ],
    outcome:
      "The top-up platform streamlined the process for Telkomsel customers, resulting in increased customer satisfaction and higher transaction volumes. The system processes thousands of transactions daily with a 99.9% success rate.",
  },
  {
    id: "3",
    imageSrc: "/projects/prjct2.jpeg",
    title: "Munas APEKSI Surabaya 2025",
    description:
      "The Apeksi Munas website serves as an official platform providing event details, registration, news updates, and documentation for the National Meeting of Indonesian City Governments.",
    variant: "large",
    tags: ["Web Development", "Event Management", "Government"],
    link: "https://munas7apeksi.surabaya.go.id/",
    category: "WebDevelopment",
    technologies: {
      frontend: [
        { name: "HTML", icon: "fa:Html5" },
        { name: "CSS", icon: "fa:Css3Alt" },
        { name: "JavaScript", icon: "fa:Js" },
        { name: "React", icon: "fa:React" },
      ],
      backend: [{ name: "Next.js", icon: "si:NextDotJs" }],
      database: [{ name: "MongoDB", icon: "si:Mongodb" }],
      hosting: [{ name: "Cloud Hosting", icon: "lu:LuCloud" }],
    },
    challenges: [
      {
        id: 1,
        title: "Real-time Updates",
        description: "Real-time data synchronization across different devices and platforms.",
        solution: "Implemented WebSockets for live updates and seamless synchronization of content.",
      },
      {
        id: 2,
        title: "User Experience",
        description: "Designing a user-friendly experience for diverse audiences.",
        solution:
          "Focused on intuitive navigation and accessibility, ensuring a smooth experience for all users, regardless of their tech proficiency.",
      },
    ],
    outcome:
      "The results and impact of the project. The website successfully supported the seamless organization and management of Munas APEKSI VII. It provided vital information, allowed for smooth event registration, and helped facilitate virtual participation. The project enhanced the overall experience for thousands of participants, both physically present and online.",
  },
  {
    id: "4",
    imageSrc: "/projects/prjct4.png",
    title: "Community Environment (Comment)",
    description:
      "A volunteer platform that facilitates participation in environmental care. Users can join activities, interact with the community, and share ideas for environmental conservation.",
    variant: "large",
    tags: ["Web Development", "Community", "Environmental Awareness"],
    link: "https://capstone-comment.vercel.app/",
    category: "WebDevelopment",
    technologies: {
      frontend: [
        { name: "HTML", icon: "fa:Html5" },
        { name: "CSS", icon: "fa:Css3Alt" },
        { name: "JavaScript", icon: "fa:Js" },
        { name: "React", icon: "fa:React" },
      ],
      backend: [{ name: "Next.js", icon: "si:NextDotJs" }],
      database: [{ name: "MongoDB", icon: "si:Mongodb" }],
      hosting: [{ name: "Vercel", icon: "si:Vercel" }],
    },
    challenges: [
      {
        id: 1,
        title: "Community Engagement",
        description: "Building an active and engaged community of environmental volunteers.",
        solution:
          "Implemented social features, gamification elements, and regular community challenges to drive participation.",
      },
      {
        id: 2,
        title: "Content Management",
        description: "Managing user-generated content and ensuring quality information.",
        solution: "Created a moderation system with community reporting and automated content filtering.",
      },
    ],
    outcome:
      "The Comment platform successfully created a thriving community of environmental enthusiasts. It facilitated numerous volunteer activities, raised awareness about environmental issues, and created measurable positive impact through community-driven initiatives.",
  },
]

