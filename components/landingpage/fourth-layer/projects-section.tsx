"use client"

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./project-card";
import { getProjects } from "@/lib/api/projects";

interface ProjectsSectionProps {
  title?: string;
  ctaText?: string;
  ctaUrl?: string;
}

interface CTACardProps {
  ctaText: string;
  ctaUrl: string;
}

export function ProjectsSection({
  title = "Showcasing Our Best Digital Creations",
  ctaText = "View More Projects",
  ctaUrl = "#projects",
}: ProjectsSectionProps) {
  // Get projects from the API
  const projects = getProjects();

  // Split projects into left and right sides
  const leftProjects = projects.filter((_, index) => index % 2 === 0);
  const rightProjects = projects.filter((_, index) => index % 2 === 1);

  return (
    <section className="py-16 bg-muted/30">
      <Container className="space-y-12">
        <div className="text-center">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            ✨ Our Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side projects */}
          <div className="space-y-6">
            {leftProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Right side projects and CTA */}
          <div className="space-y-6">
            {/* First, show 1-2 projects */}
            {rightProjects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            
            {/* CTA Card - Positioned in the middle of right column */}
            {ctaText && (
              <CTACard ctaText={ctaText} ctaUrl={ctaUrl} />
            )}
            
            {/* Remaining projects after the CTA */}
            {rightProjects.slice(2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Separate CTA card component with animations
function CTACard({ ctaText, ctaUrl }: CTACardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const currentCardRef = cardRef.current; // Store the current value in a variable
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        },
        { threshold: 0.2 }
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
  
    return (
      <div 
        ref={cardRef}
        className={`bg-card rounded-xl shadow-sm p-6 transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
      >
        <p className="text-card-foreground mb-4">
          Discover how we create secure and innovative digital solutions for our clients.
        </p>
        <Button 
          asChild 
          className="group relative overflow-hidden transition-all duration-300"
        >
          <a href={ctaUrl} className="relative z-10">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </div>
    );
  }