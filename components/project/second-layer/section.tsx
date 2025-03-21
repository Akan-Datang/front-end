"use client";

import { useState, useMemo } from "react";
import { getProjects, getCategories } from "@/lib/api/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Impor Link dari Next.js untuk navigasi
import Image from "next/image";

export function SecondLayer() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const projects = getProjects();
    const categories = getCategories();

    // Gunakan useMemo untuk mengoptimasi filtering
    const filteredProjects = useMemo(() => {
        return selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);
    }, [selectedCategory, projects]);

    return (
        <div className="px-6 md:px-12 lg:px-24 py-12 mt-24">
            <div className="flex flex-wrap gap-4 mb-8">
                <span className="text-lg font-semibold">⭐ Our Best&apos; Client Journey</span>
                <div className="flex gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                    <div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group relative"
                >
                    {/* Hover Effect - Gambar lebih tinggi */}
                    <div className="relative overflow-hidden">
                        <Image
                            src={project.imageSrc}
                            alt={project.title}
                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Overlay dengan Link - Full Cover */}
                        <Link href={project.link || "#"} legacyBehavior>
                            <a className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-lg font-semibold">View Project</span>
                            </a>
                        </Link>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {project.description}
                        </p>
                        {/* Menampilkan Tags */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}