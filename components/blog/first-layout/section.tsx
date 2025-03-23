"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { motion } from "framer-motion";
import { useCallback } from "react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  badgeText?: string;
  paragraphText?: string;
  sectionId?: string;
}

export function HeroSection({
  title = "Exploring the Future of Web Development Cybersecurity and AI",
  description = "Stay informed with in-depth analyses, breakthrough innovations, and expert insights shaping the digital landscape. Explore our latest articles and stay ahead in the ever-evolving world of technology!",
  badgeText = "Exploring the Future of Digital Innovation",
  paragraphText = "We dive deep into the latest advancements in web development, cybersecurity, and AI. From securing digital landscapes to building smarter web solutions, our expert insights keep you ahead of the curve. Explore in-depth articles, emerging trends, and real-world applications that shape the future of technology.",
  sectionId = "blog-section",
}: HeroSectionProps) {
  const { ref, shouldAnimate } = useScrollAnimation(0.2, true);
  const { ref: titleRef, shouldAnimate: titleAnimate } = useScrollAnimation(0.1, true);

  // Smooth scroll function
  const scrollToSection = useCallback(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [sectionId]);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={titleAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-left mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            {title}
          </h1>
          <p className="text-muted-foreground mb-6 text-base md:text-lg">{description}</p>
          <Button 
            className="rounded-full bg-sky-400 hover:bg-sky-500 text-white" 
            onClick={scrollToSection}
          >
            Read More
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        ref={ref} 
        className="flex flex-col items-center text-center my-8"
        initial={{ opacity: 0, y: 50 }}
        animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Badge variant="outline" className="py-2 px-4 rounded-full border border-border flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-yellow-400" />
          {badgeText}
        </Badge>
        <p className="max-w-3xl mx-auto text-base md:text-lg mt-4">{paragraphText}</p>
      </motion.div>
    </section>
  );
}