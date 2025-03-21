"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { getAllBlogPosts, getAllCategories, titleToSlug, type BlogPost } from "@/lib/api/blog"
import { cn } from "@/lib/utils"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

function FilterBadge({ 
  category, 
  isActive, 
  onClick 
}: { 
  category: string
  isActive: boolean
  onClick: () => void 
}) {
  return (
    <Badge
      variant={isActive ? "default" : "outline"}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm cursor-pointer transition-all",
        isActive 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
      )}
      onClick={onClick}
    >
      {category}
    </Badge>
  )
}

function BlogCard({ post, index }: { post: BlogPost, index: number }) {
  // Set once to false to make animation replay when scrolling back
  const { ref, shouldAnimate } = useScrollAnimation(0.1, false)

  // Calculate delay based on index (0.1s between each card)
  const delay = `${0.1 + (index % 6) * 0.1}s`

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-600 transform h-full",
        "transition-delay-[var(--delay)]",
        shouldAnimate ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
      style={{ "--delay": delay } as React.CSSProperties}
    >
      <Card className="overflow-hidden border border-border/40 hover:border-border/80 transition-colors h-full">
        <CardHeader className="p-0">
          <div className="aspect-[4/3] relative">
            <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </CardHeader>
        <CardContent className="p-5 space-y-4">
          <div className="space-y-3">
            <Badge variant="outline" className="rounded-full px-3 py-0.5 text-xs border-border/60">
              {post.category}
            </Badge>
            <h3 className="font-semibold text-lg md:text-xl">{post.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </CardContent>
        <CardFooter className="p-5 pt-0">
          <Button variant="link" className="px-0 text-primary" asChild>
            <Link href={`/blog/${titleToSlug(post.title)}`}>
              Learn More <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function PageHeader() {
  return (
    <section className="py-12 md:py-20 bg-muted/30 dark:bg-muted/10">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div>
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1 border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
            >
              <Star className="w-3.5 h-3.5 mr-1.5 fill-yellow-400 stroke-yellow-500" />
              Blog Collection
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">All Blog Posts</h1>
          
          <p className="text-lg text-muted-foreground">
            Browse our complete collection of articles and filter by category.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default function AllBlogPage() {
  const allPosts = getAllBlogPosts()
  const allCategories = getAllCategories()
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(allPosts)
  
  // Filter posts when category selection changes
  useEffect(() => {
    if (selectedCategory) {
      setFilteredPosts(allPosts.filter(post => post.category === selectedCategory))
    } else {
      setFilteredPosts(allPosts)
    }
  }, [selectedCategory, allPosts])

  return (
    <>
      <PageHeader />
      
      <section className="py-12 md:py-16">
        <Container>
          <div className="space-y-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              <FilterBadge 
                category="All" 
                isActive={selectedCategory === null}
                onClick={() => setSelectedCategory(null)} 
              />
              
              {allCategories.map(category => (
                <FilterBadge 
                  key={category}
                  category={category} 
                  isActive={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)} 
                />
              ))}
            </div>
            
            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
            
            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No blog posts found for this category.</p>
                <Button 
                  variant="link" 
                  className="mt-4" 
                  onClick={() => setSelectedCategory(null)}
                >
                  View all posts
                </Button>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}