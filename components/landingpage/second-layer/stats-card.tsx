"use client"

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface StatsCardProps {
  title: string;
  description: string;
  images?: string[];
}

export function StatsCard({ title, description, images }: StatsCardProps) {
  return (
    <div className="group relative aspect-square rounded-2xl border bg-background p-6">
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button className="rounded-full p-2 transition-colors hover:bg-muted">
            <ArrowRight className="h-5 w-5 text-[#5CC1E0]" />
          </button>
        </div>

        <div className="mt-auto">
          <p className="text-base text-muted-foreground">{description}</p>

          {images && images.length > 0 && (
            <div className="mt-4 flex -space-x-3">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-background ring-2 ring-background"
                >
                  <Image
                    src={image || '/placeholder.svg'}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="48px"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
