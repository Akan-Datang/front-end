// api/projects.ts
export interface Project {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  variant?: "large" | "small";
  tags: string[];
  link?: string;
  category: string;
}

export function getProjects(): Project[] {
  return projectsData;
}

export function getCategories(): string[] {
  const categories = new Set<string>();
  projectsData.forEach((project) => categories.add(project.category));
  return ["All", ...Array.from(categories)];
}


const projectsData: Project[] = [
  {
      id: "1",
      imageSrc: "/projects/foodcare.PNG",
      title: "Custom Website Development",
      description: "An website to help donors who wish to voluntarily donate their excess food to people who need sufficient food as a source of protein and their daily nutrition.",
      variant: "large",
      tags: ["Web Development", "UI/UX", "SEO"],
      link: "https://foodcare.xyzuan.my.id/",
      category: "WebDevelopment"
  },
  {
      id: "2",
      imageSrc: "/landing/prjct1.jpg",
      title: "Top Up Website My Telkomsel Provider",
      description: "Website from Company Neutech that try to implement top up and buy for their provider",
      tags: ["AI", "Machine Learning", "Audio Processing"],
      link: "https://simsppob-satria-abimanyu.vercel.app/auth/login",
      category: "WebDevelopment"
  },
  {
      id: "3",
      imageSrc: "/projects/prjct2.png",
      title: "Munas APEKSI Surabaya 2025",
      description: "The Apeksi Munas website serves as an official platform providing event details, registration, news updates, and documentation for the National Meeting of Indonesian City Governments.",
      variant: "large",
      tags: ["Blockchain", "FinTech", "Security"],
      link: "https://munas7apeksi.surabaya.go.id/",
      category: "WebDevelopment"
  },
];