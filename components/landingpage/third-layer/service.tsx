'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/container';
import { ArrowRight, Globe, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setHasAnimated(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );
  
    const currentRef = sectionRef.current;
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 overflow-hidden">
      <Container>
        <div 
          className={`flex justify-center mb-8 transition-transform duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform -translate-y-8'
          }`}
        >
          <div className="bg-muted/20 border border-muted rounded-full px-6 py-2 flex items-center gap-2">
            <span className="text-amber-500">✦</span>
            <span className="font-medium">Services</span>
          </div>
        </div>

        <h2 
          className={`text-3xl md:text-4xl font-bold text-center max-w-4xl mx-auto mb-16 md:mb-20 transition-all duration-700 delay-100 ease-out ${
            isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform -translate-y-8'
          }`}
        >
          We offer expert web development and cyber security solutions to elevate your business.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Custom Website Development Card */}
          <div 
            className={`rounded-lg border bg-card text-card-foreground shadow-sm p-8 transition-all duration-700 delay-200 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-16'
            }`}
          >
            <div className="mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Globe className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Custom Website Development</h3>
            <p className="text-muted-foreground mb-6">
              We design and develop modern, responsive, and high-performance websites tailored to your business needs, ensuring an engaging user experience and seamless functionality.
            </p>
            <button onClick={() => router.push('/services')} className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white h-10 px-4 py-2 transition-colors group">
              View More 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Cyber Security Solutions Card */}
          <div 
            className={`rounded-lg border bg-card text-card-foreground shadow-sm p-8 transition-all duration-700 delay-300 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-16'
            }`}
          >
            <div className="mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Cyber Security Solutions</h3>
            <p className="text-muted-foreground mb-6">
              We safeguard your digital assets with cutting-edge security measures, protecting your website and business data from cyber threats, vulnerabilities, and attacks.
            </p>
            <button onClick={() => router.push('/services')} className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-400 hover:bg-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700 text-white h-10 px-4 py-2 transition-colors group">
              View More 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}