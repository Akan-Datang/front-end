"use client"
import { useState, useEffect, useRef } from 'react';
import { Container } from '@/components/ui/container';
import { TestimonialCard } from '@/components/landingpage/fifth-layer/card-testimoy';
import { users } from '@/lib/api/user';

// Extended user type with testimonial data
interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  comment: string;
  rating: number;
}

// Map users to testimonials with added role, comment, and rating
const testimonials: Testimonial[] = users.map(user => ({
  id: user.id,
  name: user.name,
  avatar: user.avatar,
  role: "Business Owner",
  comment: [
    "The team developed a stunning, high-performance website for our business. Their attention to detail and responsiveness made the process smooth and hassle-free. Highly recommended!",
    "Our website is now faster, more secure, and much more user-friendly thanks to their expertise.",
    "They helped us identify cyber threats and keep our data safe effortlessly.",
    "Working with this team transformed our online presence. Couldn't be happier with the results."
  ][Math.floor(Math.random() * 4)],
  rating: 5,
}));

export function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for animation trigger
  useEffect(() => {
    const sectionElement = sectionRef.current; // Store the current value in a variable
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When component enters viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // When component leaves viewport, reset animation state
          setIsVisible(false);
        }
      },
      {
        root: null,
        threshold: 0.2, // Trigger when 20% of the element is visible
      }
    );
  
    if (sectionElement) {
      observer.observe(sectionElement);
    }
  
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  // Auto-slide effect - continuous looping
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isDragging, isVisible]);
  
  // Handle touch and mouse events for manual sliding
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
  };
  
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // Swiped right
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
      setIsDragging(false);
    }
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
  return (
    <section ref={sectionRef} className="py-16 w-full overflow-hidden">
      <Container>
        <div 
          className={`space-y-10 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`text-center transform transition-transform duration-700 ${
            isVisible ? 'translate-y-0' : 'translate-y-10'
          }`}>
            <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-muted mb-4">
              ✨ What Our Clients Say
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Real experiences real results hear from those who trust our services
            </h2>
          </div>
          
          <div 
            ref={sliderRef}
            className={`relative h-96 touch-pan-y overflow-hidden transform transition-all duration-700 ${
              isVisible ? 'translate-y-0' : 'translate-y-20'
            }`}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div className="flex justify-center items-center h-full">
              {testimonials.map((testimonial, index) => {
                // Calculate position (prev, active, next)
                const position = (((index - activeIndex) % testimonials.length) + testimonials.length) % testimonials.length;
                let xPosition = 0;
                let opacity = 1;
                
                if (position === 0) {
                  xPosition = 0; // Center (active)
                  opacity = 1;
                } else if (position === 1) {
                  xPosition = 100; // Right
                  opacity = 0.7;
                } else if (position === testimonials.length - 1) {
                  xPosition = -100; // Left
                  opacity = 0.7;
                } else if (position < testimonials.length / 2) {
                  xPosition = 200; // Far right
                  opacity = 0;
                } else {
                  xPosition = -200; // Far left
                  opacity = 0;
                }
                
                return (
                  <div 
                    key={testimonial.id}
                    className="absolute transition-all duration-500 ease-in-out w-full max-w-xl"
                    style={{
                      transform: `translateX(${xPosition}%)`,
                      opacity: isVisible ? opacity : 0,
                      zIndex: position === 0 ? 10 : 10 - position,
                    }}
                  >
                    <TestimonialCard
                      name={testimonial.name}
                      avatar={testimonial.avatar}
                      role={testimonial.role}
                      comment={testimonial.comment}
                      rating={testimonial.rating}
                      isActive={position === 0}
                      className={position === 0 ? "shadow-lg" : "shadow-md"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className={`flex justify-center space-x-2 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}