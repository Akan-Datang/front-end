// components/testimonials/testimonial-card.tsx
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  role: string;
  comment: string;
  rating: number;
  className?: string;
  isActive?: boolean;
}

export function TestimonialCard({
  name,
  avatar,
  role,
  comment,
  rating,
  className,
  isActive = false,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 bg-background border transition-all duration-300",
        isActive ? "scale-100 opacity-100 shadow-md" : "scale-95 opacity-80",
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        <p className="text-foreground/80 italic text-center">{comment}</p>
        
        <div className="flex justify-center mt-6">
          <div className="flex items-center space-x-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image 
                src={avatar} 
                alt={name} 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-foreground">{name}</h4>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"} />
          ))}
        </div>
      </div>
    </div>
  );
}

const StarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};