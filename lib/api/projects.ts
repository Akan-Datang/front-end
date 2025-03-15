// api/project.ts
export interface Project {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
    variant?: "large" | "small";
    tags?: string[];
    link?: string;
  }
  
  export function getProjects(): Project[] {
    // Static data - could be replaced with an actual API call later
    return projectsData;
  }
  
  // Dummy project data
  const projectsData: Project[] = [
    {
      id: "1",
      imageSrc: "/landing/prjct1.jpg",
      title: "Custom Website Development",
      description: "Engaging, responsive, and optimized for growth",
      variant: "large",
      tags: ["Web Development", "UI/UX", "SEO"],
      link: "/projects/telemedicine"
    },
    {
      id: "2",
      imageSrc: "/landing/prjct2.png",
      title: "Real Estate Website That Responsive",
      description: "Sound of the future - creating unique music with AI",
      tags: ["AI", "Machine Learning", "Audio Processing"],
      link: "/projects/ai-music"
    },
    {
      id: "3",
      imageSrc: "/landing/prjct3.png",
      title: "Tokenized Assets Platform",
      description: "All tokenized assets, one place - secure blockchain solution",
      variant: "large",
      tags: ["Blockchain", "FinTech", "Security"],
      link: "/projects/tokenized-assets"
    },
    {
      id: "4",
      imageSrc: "/landing/prjcte4.jpg",
      title: "Custom Website Development",
      description: "Engaging, responsive, and optimized for growth",
      tags: ["Web Development", "E-commerce", "Performance"],
      link: "/projects/web-development"
    }
  ];