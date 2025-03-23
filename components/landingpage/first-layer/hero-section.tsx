'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { useCounterAnimation } from '@/hooks/use-counter-animation';
import { Container } from './container';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const clientCount = useCounterAnimation(isVisible ? 100 : 0);
  const projectCount = useCounterAnimation(isVisible ? 130 : 0);

  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-12 md:py-16" ref={sectionRef}>
      <Container size="large">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Empowering Your Business with Smart Web & Security Solutions
          </h1>
        </motion.div>

        {/* Main Content Section - Responsive layout with adjusted text positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
          {/* Left Column - pushed further left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 order-2 lg:order-1 lg:z-10 lg:-ml-6 xl:-ml-12"
          >
            <p className="text-lg text-muted-foreground">
              Grow your business with professional web development and top-tier
              cyber security.
            </p>

            <div className="flex gap-8">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                  {clientCount}+
                </div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                  {projectCount}+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Center Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center mb-8 lg:mb-0"
          >
            <div className="relative w-[140%] md:w-[120%] lg:w-[180%] aspect-[4/3] lg:-mx-[40%]">
              <Image
                src="/landing/Laptop.png"
                alt="Healthcare platform interface mockup"
                fill
                className="object-contain transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 140vw, (max-width: 768px) 120vw, 180vw"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - pushed much further right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 order-3 lg:z-10 lg:ml-12 xl:ml-24"
          >
            <p className="text-lg text-muted-foreground">
              Complete digital solutions—stunning websites and unbeatable
              security.
            </p>

            <Button
              onClick={() => router.push('/services')}
              className="bg-[#5ABEE6] hover:bg-[#4AB1E6] text-white 
  dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
