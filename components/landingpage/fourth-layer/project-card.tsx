import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/lib/api/projects";
import Image from "next/image"; // Import the Image component from next/image

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { imageSrc, title, description, variant, tags } = project;
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const currentCardRef = cardRef.current; // Store the ref in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When card comes into view
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset animation state when scrolled out of view
          setIsVisible(false);
          setHasAnimated(false);
        }
      },
      { threshold: 0.2 } // 20% of element must be visible
    );
    
    if (currentCardRef) {
      observer.observe(currentCardRef);
    }
    
    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef);
      }
    };
  }, []);
  
  // Set hasAnimated after animation completes
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 600); // Match this with animation duration
      
      return () => clearTimeout(timer);
    }
  }, [isVisible]);
  
  return (
    <Card 
      ref={cardRef}
      className={`overflow-hidden border-0 shadow-sm rounded-xl bg-card text-card-foreground 
        transition-all duration-500 ease-in-out
        ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'} 
        ${variant === "large" ? "md:col-span-2" : ""}
      `}
    >
      <div 
        className={`relative overflow-hidden 
          ${variant === "large" ? "h-64 md:h-80" : "h-52 md:h-64"}`}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill // This will make the image fill the container
          className={`object-cover 
            transition-all duration-500 ease-in-out
            group-hover:scale-105 filter 
            hover:filter-none hover:scale-105
            ${hasAnimated ? 'grayscale hover:grayscale-0' : 'grayscale'}`}
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-block px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}