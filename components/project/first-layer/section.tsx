"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const { ref, shouldAnimate } = useScrollAnimation(0.2, true);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={ref}
      className={`py-16 px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ease-in-out 
        ${shouldAnimate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="text-left max-w-2xl">
        <h2 className="text-3xl font-bold text-foreground">
          Our Work, Your Success.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover our portfolio of successful projects where we turn visions into reality.
          From secure web applications to advanced AI integrations, our work is designed
          to help businesses grow, innovate, and stay protected in the digital landscape.
        </p>
        <Button 
          className="mt-6 bg-[#5ABEE6] text-white hover:bg-[#4aa8cc] dark:bg-white dark:text-black dark:hover:bg-gray-400"
          onClick={handleScrollToProjects} // Tambahkan onClick handler di sini
        >
          View Our Projects
        </Button>
      </div>
    
      <div className="bg-blue-400 text-white py-6 mt-12 text-center absolute left-0 w-full">
        <p className="max-w-3xl mx-auto">
          More than 100 businesses have entrusted us with their digital needs, from
          secure web development to cutting-edge AI solutions. Join them in building a safer,
          smarter, and more efficient digital future with us!
        </p>
      </div>
    </div>
  );
}