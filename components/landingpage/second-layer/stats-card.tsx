"use client"

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface StatsCardProps {
  title: string;
  description: string;
  images?: string[];
  rightText?: string; // Teks tambahan di sebelah kanan
}

export function StatsCard({ title, description, images, rightText }: StatsCardProps) {
  return (
    <div className="group relative aspect-square rounded-2xl border bg-background p-6">
      <div className="flex h-full flex-col">
        {/* Bagian Atas: Judul dan Tombol Panah */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button className="rounded-full p-2 transition-colors hover:bg-muted">
            <ArrowRight className="h-5 w-5 text-[#5CC1E0]" />
          </button>
        </div>

        {/* Bagian Tengah: Teks dan Avatar */}
        <div className="mt-4 flex flex-1 flex-col justify-center items-center text-center">
          <div className="flex items-center">
            {/* Teks dipisahkan menjadi beberapa baris */}
            <div className="text-left">
              <p className="text-base text-muted-foreground">{description}</p>
            </div>

            {/* Avatar di sebelah kanan teks */}
            {images && images.length > 0 && (
              <div className="ml-4 flex -space-x-3">
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

          {/* Teks tambahan di sebelah kanan */}
          {rightText && (
            <div className="mt-6 text-left">
              <p className="text-base text-muted-foreground">{rightText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}