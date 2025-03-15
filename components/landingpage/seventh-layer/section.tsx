"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";

interface ContactSectionProps {
  title?: string;
  buttonText?: string;
  className?: string;
  onContact?: () => void;
  imageSrc?: string;
}

export function Contact({
  title = "Have any questions or need more info?",
  buttonText = "Contact Us",
  className = "",
  onContact,
  imageSrc = "/landing/contact.png", // Default image path
}: ContactSectionProps) {
  const { theme } = useTheme();

  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      {/* Full-width blue background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-sky-800 dark:from-sky-900 dark:to-sky-800" />
      
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-stretch min-h-[400px]">
        {/* Left content area */}
        <div className="relative w-full lg:w-2/5">
          <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              {title}
            </h2>
            <Button
              size="lg"
              variant={theme === "dark" ? "outline" : "secondary"}
              className="text-lg px-8 w-fit"
              onClick={onContact}
            >
              {buttonText}
            </Button>
          </div>
        </div>

        {/* Right image area with slanted left edge */}
        <div className="w-full lg:w-3/5 h-[400px] lg:h-auto relative">
          {/* Slanted overlay for the image */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 transform origin-top-left"
              style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              <Image
                src={imageSrc}
                alt="Contact section"
                fill
                className="object-cover object-left"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}